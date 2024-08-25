import IonIcon from "@reacticons/ionicons";
import * as S from "./style";
import Chatbox from "../../components/chatbox";
import useChat from "../../hooks/chat/useChat";
import { useRef } from "react";

const Chatbot = () => {
  const chatWrapRef = useRef<HTMLDivElement | null>(null);
  const { ...chat } = useChat(chatWrapRef);

  const preset = (message:string) => {
    chat.setMessage(message);
    chat.submit();
  }

  return (
    <S.Container>
      <S.ChatWrap ref={chatWrapRef}>
        <S.chatIntro>
          <img src='/assets/farmer.svg' /> <br /><br />
          챗봇과 함께 대화하며 <br />
          슬기로운 당신의 농부 생활을 만들어 보세요!
        </S.chatIntro>
        {chat.chatData.map((item, idx) => (
          <Chatbox message={item} key={idx} />
        ))}
      </S.ChatWrap>
      <S.RecommendWrap>
        {chat.recommend.map((item,idx) => (
          <S.Recommend
            onClick={() => {
              preset(item);
            }}
            key={idx}
          >
            {item}
          </S.Recommend>
        ))}
      </S.RecommendWrap>
      <S.InputWrap>
        <S.Input
          placeholder="질문을 입력하세요!"
          onChange={chat.handleMessage}
          value={chat.message}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              e.nativeEvent.isComposing === false &&
              !chat.loading
            ) {
              chat.submit();
            }
          }}
        />
        <IonIcon
          name={chat.loading ? "ban-outline" : "paper-plane-outline"}
          size="large"
          style={{ fontSize: "1.7rem", marginLeft: "1rem", cursor: "pointer" }}
          onClick={() => {
            if (!chat.loading) chat.submit();
          }}
        />
      </S.InputWrap>
    </S.Container>
  );
};

export default Chatbot;
