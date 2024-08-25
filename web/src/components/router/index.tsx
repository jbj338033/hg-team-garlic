import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main";
import Chatbot from "../../pages/chatbot";
import Support from "../../pages/support";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/chatbot" element={<Chatbot />}></Route>
      <Route path="/support" element={<Support />}></Route>
    </Routes>
  );
};

export default Router;
