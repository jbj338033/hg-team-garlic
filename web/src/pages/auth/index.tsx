import { useNavigate } from 'react-router-dom';
import * as S from './style'
import IonIcon from '@reacticons/ionicons';

const Auth = () => {

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoWrap>
        <IonIcon name='chevron-back-outline' size='large' style={{fontSize:'1.7rem',alignSelf:'flex-start'}} onClick={()=>{navigate(-2)}}/>
        <S.Logo src="/assets/logo.svg" alt="" />
        <S.Title>슬기로운 농사 생활, 굿팜</S.Title>
      </S.LogoWrap>
      <S.ButtonWrap>
        <S.Login
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </S.Login>
        <S.Signup
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </S.Signup>
      </S.ButtonWrap>
    </S.Container>
  );
}

export default Auth