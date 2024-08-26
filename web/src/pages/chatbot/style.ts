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
  margin: 0 1rem 1rem 0;
`;

export const WaitingWrap = styled.div`
  width: 20rem;
  height: 5rem;
  padding: 2rem 6rem;
  box-sizing: border-box;
  background-color: #34c831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-radius: 2rem 2rem 2rem 0rem;
  margin: 1rem;
`;

const WavingFirstChild = keyframes`
  0% {
    width: 1.5rem;
    height: 1.5rem;
  }
  25% {
    width: 1rem;
    height: 1rem;
  }
  50% {
    width: 1rem;
    height: 1rem;
  }
  75% {
    width: 1rem;
    height: 1rem;
  }
  100% {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const WavingSecondChild = keyframes`
  0% {
    width: 1rem;
    height: 1rem;
  }
  25% {
    width: 1.5rem;
    height: 1.5rem;
  }
  50% {
    width: 1rem;
    height: 1rem;
  }
  75% {
    width: 1.5rem;
    height: 1.5rem;
  }
  100% {
    width: 1rem;
    height: 1rem;
  }
`;

const WavingLastChild = keyframes`
  0% {
    width: 1rem;
    height: 1rem;
  }
  25% {
    width: 1rem;
    height: 1rem;
  }
  50% {
    width: 1.5rem;
    height: 1.5rem;
  }
  75% {
    width: 1rem;
    height: 1rem;
  }
  100% {
    width: 1rem;
    height: 1rem;
  }
`;


export const WaitingDot = styled.span`
  width: 1rem;
  height: 1rem;
  background-color: #FFFFFF;
  border-radius: 50rem;
  transition: all 2s;

  &:first-child {
    animation: ${WavingFirstChild} 2s infinite;
  }

  &:nth-child(2) {
    animation: ${WavingSecondChild} 2s infinite;
  }

  &:last-child {
    animation: ${WavingLastChild} 2s infinite;
  }
`;