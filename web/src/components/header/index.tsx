import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style'
import useGetMe from '../../hooks/auth/useGetMe';
import { getCookie } from '../../libs/cookies/cookie';
import { useEffect } from 'react';

const Header = () => {

  const location = useLocation();
  const navigation = useNavigate();
  const ACCESS_TOKEN = getCookie("ACCESS_TOKEN");

  const { ...auth } = useGetMe();

  useEffect(() => {
    if (!ACCESS_TOKEN || ACCESS_TOKEN === null) {
      return;
    }
    auth.getMe();
  }, [ACCESS_TOKEN]);

  useEffect(()=>{
    if(auth.user && !auth.user.isCompleted) {
      navigation('/analysis');
    }
  },[auth.user]);

  if (location.pathname === "/auth") {
    return;
  }
  return (
    <S.Container>
      <S.LogoWrap>
        <S.Logo src="/assets/logo.svg" alt="" />
        <h1 style={{fontWeight:600}}>슬기로운 농사 생활</h1>
      </S.LogoWrap>
    </S.Container>
  );
}

export default Header