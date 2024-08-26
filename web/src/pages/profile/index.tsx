import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useEffect } from "react";
import { getCookie, removeCookie } from "../../libs/cookies/cookie";
import useGetMe from "../../hooks/auth/useGetMe";
import NotificationService from "../../libs/notification/NotificationService";

const Profile = () => {

  const navigate = useNavigate();
  const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

  const { ...auth } = useGetMe();

  useEffect(()=>{
    if(!ACCESS_TOKEN || ACCESS_TOKEN === null) {
      navigate('/auth');
      return;
    }
    auth.getMe();
  },[]);

  const logout = () => {
    removeCookie("ACCESS_TOKEN");
    removeCookie("REFRESH_TOKEN");
    NotificationService.success('로그아웃 성공!');
    navigate('/');
  }

  return (
    <S.Container>
      <S.ProfileArea>
        <S.Avatar src="/assets/farmer.svg" />
        <S.NameWrap>
          <S.Name>
            {auth.user ? auth.user.username + " 농부님" : "로딩중..."}
          </S.Name>
          <S.Logout onClick={logout}>로그아웃</S.Logout>
        </S.NameWrap>
      </S.ProfileArea>
    </S.Container>
  );
};

export default Profile;
