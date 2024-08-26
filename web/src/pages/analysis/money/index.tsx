import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import instance from "../../../libs/axios/customAxios";
import NotificationService from "../../../libs/notification/NotificationService";

const Money = () => {

  const [answer, setAnswer] = useState<""|"예"|"아니오">("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value as ""|"예"|"아니오");
  };

  const submit = () => {
    setLoading(true);
    if(answer === '예') {
      instance.post("/users/me/hasMoney", {}, { params: { hasMoney: true } });
    }else if (answer === '아니오') {
      instance.post("/users/me/hasMoney", {}, { params: { hasMoney: false } });
    }else{
      NotificationService.warn('올바른 답을 선택해주세요.');
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/analysis/land");
  };

  return (
    <S.Container>
      <S.QuestionWrap>
        <S.Question>
          두번째 질문
          <br />
          귀농 자금은 모아두었나요?
        </S.Question>
        <S.Picture src="/assets/money.svg" />
      </S.QuestionWrap>
      <S.InputWrap>
        <S.Input placeholder="예 또는 아니오" onChange={handleAnswer} value={answer}/>
        <S.Next onClick={submit} disabled={loading}>{loading?"제출중...":"다음으로"}</S.Next>
      </S.InputWrap>
    </S.Container>
  );
};

export default Money;
