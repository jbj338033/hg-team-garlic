import styled, { keyframes } from "styled-components";
const SlideIn = keyframes`
  0% {
    margin-left:5rem;
  }
  100% {
    margin-left:0;
  }
`;
export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: ${SlideIn} 0.3s forwards;
`;
export const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;
export const Question = styled.h1`
  font-size: 2rem;
  text-align: center;
  word-break: keep-all;
  margin-bottom: 2rem;
`;
export const Picture = styled.img`
  width: 80%;
`;

export const InputWrap = styled.div`
  width: 100%;
  padding: 0 4rem;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.7rem;
  padding: 1.5rem 1rem;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  font-weight: 300;
  font-family: sans-serif;
  border-radius: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

export const Next = styled.button`
  width: 100%;
  height: 5rem;
  background-color: #34c831;
  border: none;
  outline: none;
  border-radius: 1rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: white;
  font-weight: 400;
  transition: all 0.1s;
  cursor: pointer;
  &:active {
    background-color: #28a426;
  }
`;
