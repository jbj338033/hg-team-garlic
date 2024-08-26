import * as S from './style';

const Chatbox = (props:{message:string}) => {
  return (
    <S.Container>
      {props.message}
    </S.Container>
  )
}

export default Chatbox