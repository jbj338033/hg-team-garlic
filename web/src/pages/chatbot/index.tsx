import IonIcon from "@reacticons/ionicons";
import * as S from "./style";
import Chatbox from "../../components/chatbox";
import useChat from "../../hooks/chat/useChat";

const Chatbot = () => {

  const { ...chat } = useChat();

  return (
    <S.Container>
      <S.ChatWrap>
        {chat.chatData.map((item)=>(
          <Chatbox message={item}/>
        ))}
      </S.ChatWrap>
      <S.InputWrap>
        <S.Input 
          placeholder="질문을 입력하세요!" 
          onChange={chat.handleMessage} 
          value={chat.message} 
          onKeyDown={(e)=>{
            if(e.key === 'Enter' && !chat.loading){
              chat.submit();
            }
          }}
        />
        <IonIcon
          name="paper-plane-outline"
          size="large"
          style={{ fontSize: "1.7rem", marginLeft: "1rem", cursor: "pointer" }}
          onClick={()=>{if(!chat.loading)chat.submit();}}
        />
      </S.InputWrap>
    </S.Container>
  );
};

export default Chatbot;
