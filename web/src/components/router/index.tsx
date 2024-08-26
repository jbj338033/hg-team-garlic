import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main";
import Chatbot from "../../pages/chatbot";
import Support from "../../pages/support";
import Profile from "../../pages/profile";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Auth from "../../pages/auth";
import Analysis from "../../pages/analysis";
import Province from "../../pages/analysis/province";
import Money from "../../pages/analysis/money";
import Land from "../../pages/analysis/land";
import Item from "../../pages/analysis/item";
import Education from "../../pages/analysis/education";
import Residence from "../../pages/analysis/residence";
import Experience from "../../pages/analysis/experience";
import Result from "../../pages/analysis/result";

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
      <Route path="/analysis" element={<Analysis />}></Route>
      <Route path="/analysis/province" element={<Province />}></Route>
      <Route path="/analysis/money" element={<Money />}></Route>
      <Route path="/analysis/land" element={<Land />}></Route>
      <Route path="/analysis/item" element={<Item />}></Route>
      <Route path="/analysis/education" element={<Education />}></Route>
      <Route path="/analysis/residence" element={<Residence />}></Route>
      <Route path="/analysis/experience" element={<Experience />}></Route>
      <Route path="/analysis/result" element={<Result />}></Route>
    </Routes>
  );
};

export default Router;
