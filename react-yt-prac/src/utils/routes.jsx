import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home-page/home";
import Skills from "../pages/skills/skills";
import Userdetail from "../pages/userdetail/userdetail";
import InputField from "../pages/inputfield/inputfield";
import BtnInncrementDecrement from "../pages/counter/counter";

const RoutesOfPages = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/userdetail"
          element={<Userdetail userName="Ali" age="20" email="test@123.mail" />}
        />
        <Route path="/inputField" element={<InputField />} />
        <Route
          path="/BtnInncrementDecrement"
          element={<BtnInncrementDecrement />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesOfPages;
