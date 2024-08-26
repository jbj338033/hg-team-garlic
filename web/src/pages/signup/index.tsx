import IonIcon from "@reacticons/ionicons";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useSignup from "../../hooks/auth/useSignup";

const Signup = () => {
  const navigate = useNavigate();

  const { ...signup } = useSignup();

  return (
    <S.Container>
      <S.InputWrap>
        <IonIcon
          name="chevron-back-outline"
          size="large"
          style={{
            fontSize: "1.7rem",
            marginBottom: "2rem",
            alignSelf: "flex-start",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.Title>회원가입</S.Title>
        <S.Input
          placeholder="아이디"
          onChange={signup.handleSignupData}
          name="username"
          value={signup.signupData.username}
          type="text"
        />
        <S.Input
          placeholder="비밀번호"
          onChange={signup.handleSignupData}
          name="password"
          value={signup.signupData.password}
          type="password"
        />
        <S.Input
          placeholder="비밀번호 확인"
          onChange={signup.handlePasswordChk}
          name="passwordChk"
          value={signup.passwordChk}
          type="password"
        />
      </S.InputWrap>
      <S.Button
        onClick={signup.submit}
        disabled={signup.loading}
        style={signup.loading ? { backgroundColor: "#28a426" } : {}}
      >
        {signup.loading ? "회원가입 중..." : "회원가입"}
      </S.Button>
    </S.Container>
  );
};

export default Signup;
