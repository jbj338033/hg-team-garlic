import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Analysis = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoWrap>
        <S.Logo src="/assets/logo.svg" alt="" />
        <S.Title>당신에게 맞는 최적의 정보를 위해 몇가지 사항을 확인하겠습니다</S.Title>
      </S.LogoWrap>
      <S.ButtonWrap>
        <S.Start
          onClick={() => {
            navigate("/analysis/province");
          }}
        >
          시작하기
        </S.Start>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default Analysis;
