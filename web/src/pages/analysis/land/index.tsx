import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import instance from "../../../libs/axios/customAxios";
import NotificationService from "../../../libs/notification/NotificationService";

const Land = () => {
  const [answer, setAnswer] = useState<"" | "예" | "아니오">("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value as "" | "예" | "아니오");
  };

  const submit = () => {
    setLoading(true);
    if (answer === "예") {
      instance.post("/users/me/hasLand", {}, { params: { hasLand: true } });
    } else if (answer === "아니오") {
      instance.post("/users/me/hasLand", {}, { params: { hasLand: false } });
    } else {
      NotificationService.warn("올바른 답을 선택해주세요.");
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/analysis/item");
  };

  return (
    <S.Container>
      <S.QuestionWrap>
        <S.Question>
          세번째 질문
          <br />
          농사나 거주에 활용할 토지는 소유하고 계신가요?
        </S.Question>
        <S.Picture src="/assets/land.svg" />
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

export default Land;
