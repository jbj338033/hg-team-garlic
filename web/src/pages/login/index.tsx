import IonIcon from "@reacticons/ionicons";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";

const Login = () => {

  const navigate = useNavigate();

  const { ...login } = useLogin();
  
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
        <S.Title>로그인</S.Title>
        <S.Input
          placeholder="아이디"
          onChange={login.handleLoginData}
          name="username"
          value={login.loginData.username}
          type="text"
        />
        <S.Input
          placeholder="비밀번호"
          onChange={login.handleLoginData}
          name="password"
          value={login.loginData.password}
          type="password"
        />
      </S.InputWrap>
      <S.Button
        onClick={login.submit}
        disabled={login.loading}
        style={login.loading ? { backgroundColor: "#28a426" } : {}}
      >
        {login.loading ? "로그인 중..." : "로그인"}
      </S.Button>
    </S.Container>
  );
};

export default Login;
