import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 3rem 3rem 0 0;
  box-shadow:0.1rem 0.1rem 1rem 0.1rem #ccc;
  padding: 0 1rem;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`;

export const MenuBox = styled.div`
  width:33%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export const MenuTitle = styled.p`
  font-size:1.4rem;
  margin-top:0.5rem;
`