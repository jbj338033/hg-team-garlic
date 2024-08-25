import styled, { keyframes } from "styled-components";

const SlideIn = keyframes`
  0% {
    margin-left:5rem;
  }
  100% {
    margin-left:0;
  }
`

export const Container = styled.div`
  width: 100%;
  height:calc(100% - 15rem);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  animation:${SlideIn} 0.3s forwards;
`;
export const ChatWrap = styled.div`
  width:100%;
  display:flex;
  flex:1;
  flex-direction:column;
  padding:1rem;
  overflow:scroll;
`
export const chatIntro = styled.div`
  width:70%;
  text-align:center;
  align-self:center;
  padding: 2rem 0;
`
export const InputWrap = styled.div`
  width:100%;
  height:10rem;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Input = styled.input`
  width:80%;
  font-size:1.7rem;
  padding: 1.5rem 1rem;
  background-color:#F1F1F1;
  border:none;
  outline:none;
  font-weight:300;
  font-family:sans-serif;
  border-radius:1rem;
`
export const RecommendWrap = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin-top:2rem;
`
export const Recommend = styled.div`
  padding: 0.5rem 1rem;
  border: 0.2rem solid #34c831;
  background-color: rgba(52, 200, 49, 0.5);
  border-radius:5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.2rem;
  cursor: pointer;
  margin: 0 1rem
`;