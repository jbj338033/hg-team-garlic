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
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

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

  const toggleAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

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
            "http://13.209.80.146:8080/auth/login",
            loginData
          );
          if (autoLogin) {
            setCookie("REFRESH_TOKEN", res.data.refreshToken, {
              path: "/",
              maxAge: 2600000,
            });
            setCookie("ACCESS_TOKEN", res.data.accessToken, {
              path: "/",
              maxAge: 2600000,
            });
          } else {
            setCookie("REFRESH_TOKEN", res.data.refreshToken, { path: "/" });
            setCookie("ACCESS_TOKEN", res.data.accessToken, { path: "/" });
          }
          NotificationService.success("Login success");
          navigate("/");
        } catch (err: any) {
          NotificationService.error("login failed");

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
    autoLogin,
    toggleAutoLogin,
    submit,
    loading,
    passwordValid,
    usernameValid,
  };
};
export default useLogin;
