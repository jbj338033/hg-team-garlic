import IonIcon from '@reacticons/ionicons';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TabBar = () => {

  const [pageState, setPageState] = useState('/');

  const navigation = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === '/chatbot') {
      setPageState('CHATBOT');
    }else if (location.pathname === '/support') {
      setPageState('SUPPORT');
    }else if (location.pathname === '/profile') {
      setPageState('PROFILE');
    }else {
      setPageState('/');
    }
  },[location.pathname]);

  const navTo = (page:string) => {
    navigation(page);
  }


  return (
    <S.Container>
      <S.MenuBox
        onClick={() => {
          navTo("/");
        }}
      >
        <IonIcon
          name={pageState === "/" ? "home" : "home-outline"}
          size="large"
          style={
            pageState === "/"
              ? { fontSize: "1.6rem", color: "#93DB92" }
              : { fontSize: "1.6rem" }
          }
        />
        <S.MenuTitle
          style={pageState === "/" ? { fontWeight: 500, color: "#93DB92" } : {}}
        >
          메인
        </S.MenuTitle>
      </S.MenuBox>
      <S.MenuBox
        onClick={() => {
          navTo("/chatbot");
        }}
      >
        <IonIcon
          name={pageState === "CHATBOT" ? "chatbox" : "chatbox-outline"}
          size="large"
          style={
            pageState === "CHATBOT"
              ? { fontSize: "1.6rem", color: "#93DB92" }
              : { fontSize: "1.6rem" }
          }
        />
        <S.MenuTitle
          style={
            pageState === "CHATBOT" ? { fontWeight: 500, color: "#93DB92" } : {}
          }
        >
          챗봇
        </S.MenuTitle>
      </S.MenuBox>
      <S.MenuBox
        onClick={() => {
          navTo("/support");
        }}
      >
        <IonIcon
          name={
            pageState === "SUPPORT"
              ? "information-circle"
              : "information-circle-outline"
          }
          size="large"
          style={
            pageState === "SUPPORT"
              ? { fontSize: "1.6rem", color: "#93DB92" }
              : { fontSize: "1.6rem" }
          }
        />
        <S.MenuTitle
          style={
            pageState === "SUPPORT" ? { fontWeight: 500, color: "#93DB92" } : {}
          }
        >
          지원사업
        </S.MenuTitle>
      </S.MenuBox>
      <S.MenuBox
        onClick={() => {
          navTo("/profile");
        }}
      >
        <IonIcon
          name={
            pageState === "PROFILE"
              ? "person"
              : "person-outline"
          }
          size="large"
          style={
            pageState === "PROFILE"
              ? { fontSize: "1.6rem", color: "#93DB92" }
              : { fontSize: "1.6rem" }
          }
        />
        <S.MenuTitle
          style={
            pageState === "PROFILE" ? { fontWeight: 500, color: "#93DB92" } : {}
          }
        >
          프로필
        </S.MenuTitle>
      </S.MenuBox>
    </S.Container>
  );
}

export default TabBar