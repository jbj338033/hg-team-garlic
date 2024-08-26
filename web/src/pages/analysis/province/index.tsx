import { useState } from 'react';
import * as S from './style'
import instance from '../../../libs/axios/customAxios';
import { useNavigate } from 'react-router-dom';

const Province = () => {

  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  }

  const submit = () => {
    setLoading(true);
    instance.post('/users/me/location',{},{params:{location:answer}});
    setLoading(false);
    navigate("/analysis/money");
  }

  return (
    <S.Container>
      <S.QuestionWrap>
        <S.Question>
          첫번째 질문
          <br />
          어디서 귀농을 시작하실 예정 이신가요?
        </S.Question>
        <S.Picture src='/assets/province.svg'/>
      </S.QuestionWrap>
      <S.InputWrap>
        <S.Input placeholder='지역명을 입력하세요. ex) 의성군' value={answer} onChange={handleAnswer}/>
        <S.Next onClick={submit} disabled={loading}>{loading?"제출중...":"다음으로"}</S.Next>
      </S.InputWrap>
    </S.Container>
  );
}

export default Province