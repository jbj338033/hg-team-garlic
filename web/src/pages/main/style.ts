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
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  animation: ${SlideIn} 0.3s forwards;
`;