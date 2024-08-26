import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Result = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoWrap>
        <S.Logo src="/assets/logo.svg" alt="" />
        <S.Title>
          모든 검사가 끝났습니다. 이제 굿팜을 이용해 농촌에서 당신의 꿈을 펼치세요!
        </S.Title>
      </S.LogoWrap>
      <S.ButtonWrap>
        <S.Start
          onClick={() => {
            navigate("/");
          }}
        >
          시작하기
        </S.Start>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default Result;
