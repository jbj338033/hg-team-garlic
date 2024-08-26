import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import instance from "../../../libs/axios/customAxios";
import NotificationService from "../../../libs/notification/NotificationService";

const Education = () => {
  const [answer, setAnswer] = useState<"" | "예" | "아니오">("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value as "" | "예" | "아니오");
  };

  const submit = () => {
    setLoading(true);
    if (answer === "예") {
      instance.post("/users/me/hasStudied", {}, { params: { hasStudied: true } });
    } else if (answer === "아니오") {
      instance.post("/users/me/hasStudied", {}, { params: { hasStudied: false } });
    } else {
      NotificationService.warn("올바른 답을 선택해주세요.");
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/analysis/residence");
  };

  return (
    <S.Container>
      <S.QuestionWrap>
        <S.Question>
          다섯번째 질문
          <br />
          귀농을 위한 공부는 모두 끝마치셨나요?
        </S.Question>
        <S.Picture src="/assets/studied.png" />
      </S.QuestionWrap>
      <S.InputWrap>
        <S.Input
          placeholder="예 또는 아니오"
          onChange={handleAnswer}
          value={answer}
        />
        <S.Next onClick={submit} disabled={loading}>
          {loading ? "제출중..." : "다음으로"}
        </S.Next>
      </S.InputWrap>
    </S.Container>
  );
};

export default Education;
