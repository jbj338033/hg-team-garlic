import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: #f1f1f1;
  font-size: 1.6rem;
  line-height: 1.3;
  font-weight: 300;
  word-break: keep-all;
  &:nth-child(odd) {
    align-self: flex-start;
    border-radius: 2rem 2rem 2rem 0;
    background-color: #34c831;
    color:white;
  }
  &:nth-child(even) {
    align-self: flex-end;
    border-radius: 2rem 2rem 0 2rem;
  }
`;