import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useEffect } from "react";
import { getCookie } from "../../libs/cookies/cookie";
import useGetMe from "../../hooks/auth/useGetMe";

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

  return (
    <S.Container>
      {auth.user?.username}
    </S.Container>
  );
};

export default Profile;
