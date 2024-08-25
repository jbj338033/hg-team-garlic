import * as S from './style'

const Header = () => {
  return (
    <S.Container>
      <S.LogoWrap>
        <S.Logo src="/assets/logo.svg" alt="" />
        <h1 style={{fontWeight:600}}>슬기로운 농사 생활</h1>
      </S.LogoWrap>
    </S.Container>
  );
}

export default Header