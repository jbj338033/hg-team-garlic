import React, { useCallback, useState } from "react";
import { SignupType } from "../../types/auth/auth.type.ts";
import axios from "axios";
import { setCookie } from "../../libs/cookies/cookie.ts";
import NotificationService from "../../libs/notification/NotificationService.ts";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [signupData, setSignupData] = useState<SignupType>({
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
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData]
  );


  const initValidState = () => {
    setPasswordValid(true);
    setUsernameValid(true);
  };

  const submit = async () => {
    if (signupData.username.length > 0 && signupData.password.length > 0) {
      setLoading(true);
      if (!loading) {
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/signup`,
            signupData
          );
          setCookie("REFRESH_TOKEN", res.data.refreshToken, { path: "/", maxAge:2600000 });
          setCookie("ACCESS_TOKEN", res.data.accessToken, { path: "/", maxAge:2600000 });
          NotificationService.success("Login success");
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
      if (signupData.username.length <= 0) {
        setUsernameValid(false);
      }
      if (signupData.password.length <= 0) {
        setPasswordValid(false);
      }
    }
  };

  return {
    signupData,
    handleLoginData,
    submit,
    loading,
    passwordValid,
    usernameValid,
  };
};
export default useLogin;
