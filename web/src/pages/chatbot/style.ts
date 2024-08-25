import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:calc(100% - 15rem);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export const ChatWrap = styled.div`
  width:100%;
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:flex-end;
  padding:1rem;
  overflow:scroll;
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
  border-radius:1rem
`