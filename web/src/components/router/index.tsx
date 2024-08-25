import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main";
import Chatbot from "../../pages/chatbot";
import Support from "../../pages/support";
import Profile from "../../pages/profile";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Auth from "../../pages/auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/chatbot" element={<Chatbot />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default Router;
