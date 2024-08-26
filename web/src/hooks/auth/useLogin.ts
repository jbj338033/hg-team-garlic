import React, { useCallback, useState } from "react";
import { LoginType } from "../../types/auth/auth.type.ts";
import axios from "axios";
import { setCookie } from "../../libs/cookies/cookie.ts";
import NotificationService from "../../libs/notification/NotificationService.ts";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [usernameValid, setUsernameValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      initValidState();
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

  const initValidState = () => {
    setPasswordValid(true);
    setUsernameValid(true);
  };

  const submit = async () => {
    if (loginData.username.length > 0 && loginData.password.length > 0) {
      setLoading(true);
      if (!loading) {
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            loginData
          );
          setCookie("REFRESH_TOKEN", res.data.refreshToken, { path: "/", maxAge:2600000 });
          setCookie("ACCESS_TOKEN", res.data.accessToken, {
            path: "/",
            maxAge: 2600000,
          });
          NotificationService.success("로그인 성공!");
          navigate("/");
        } catch (err: any) {
          NotificationService.error("로그인 실패");

          if (err.response.status === 404) {
            setUsernameValid(false);
          }

          if (err.response.status === 401) {
            setPasswordValid(false);
          }
        } finally {
          setLoading(false);
        }
      }
    } else {
      NotificationService.error("모든 입력창을 채워주세요");
      if (loginData.username.length <= 0) {
        setUsernameValid(false);
      }
      if (loginData.password.length <= 0) {
        setPasswordValid(false);
      }
    }
  };

  return {
    loginData,
    handleLoginData,
    submit,
    loading,
    passwordValid,
    usernameValid,
  };
};
export default useLogin;
