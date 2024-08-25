import React, { useCallback, useState } from "react";
import { SignupType } from "../../types/auth/auth.type.ts";
import axios from "axios";
import NotificationService from "../../libs/notification/NotificationService.ts";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [signupData, setSignupData] = useState<SignupType>({
    username: "",
    password: "",
  });
  const [passwordChk, setPasswordChk] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [usernameValid, setUsernameValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      initValidState();
      const { name, value } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData]
  );

  const handlePasswordChk = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordChk(e.target.value);
  }


  const initValidState = () => {
    setPasswordValid(true);
    setUsernameValid(true);
  };

  const submit = async () => {
    if (signupData.username.length > 0 && signupData.password.length > 0) {
      if(passwordChk !== signupData.password) {
        NotificationService.warn('비밀번호를 다시 확인해주세요.');
        return;
      }
      setLoading(true);
      if (!loading) {
        try {
          const res = await axios.post(
            "http://13.209.80.146:8080/auth/signup",
            signupData
          );
          if (res) {
            NotificationService.success("회원가입 성공!");
            navigate("/login");
          }
        } catch (err: any) {
          if (err.response.status === 409) {
            setUsernameValid(false);
            NotificationService.error("이미 사용 중인 아이디 입니다.");
          }else{
            NotificationService.error("네트워크 에러");
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
    handleSignupData,
    submit,
    loading,
    passwordValid,
    usernameValid,
    passwordChk,
    handlePasswordChk
  };
};
export default useSignup;
