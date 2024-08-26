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
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  animation: ${SlideIn} 0.3s forwards;
`;


export const ProfileArea = styled.div`
  width:100%;
  height:12rem;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom:#F1F1F1 0.1rem solid;
  padding: 0 2rem;
  box-sizing:border-box;
`
export const NameWrap = styled.div`
  width:calc(100% - 11rem);
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`
export const Name = styled.h1`
  font-size:2.5rem;
  margin-bottom:1rem;
`
export const Logout = styled.p`
  font-size: 1.7rem;
  color: #dc0d0d;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width:9rem;
  height:9rem;
  margin-right:2rem;
`