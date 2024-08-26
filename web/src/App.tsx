import { BrowserRouter } from "react-router-dom"
import Router from "./components/router"
import styled from "styled-components";
import TabBar from "./components/tabBar";
import CustomToastContainer from "./libs/notification/CustomToastContainer";
import Header from "./components/header";

const App = () => {

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <CustomToastContainer/>
        <Router />
        <TabBar />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 50rem;
  height:100vh;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #ccc;
  flex-direction:column;
  margin: 0 auto;
  overflow:hidden;
  @media (max-width: 600px) {
    width:100%;
    box-shadow:none;
    margin:0;
  }
`;

export default App
