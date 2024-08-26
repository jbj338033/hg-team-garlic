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
  font-size: 2rem;
  animation: ${SlideIn} 0.3s forwards;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 41rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 4rem;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  border: none;
  outline: none;
  border-bottom: 0.1rem solid #34c831;
  &:nth-child(3) {
    margin: 3rem 0;
  }
  &:nth-child(4) {
    margin-bottom: 3rem;
  }
`;

export const Button = styled.button`
  width: calc(100% - 4rem);
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
