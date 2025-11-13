import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "../components/navbar/navbar";
import Home from "../screen/home/home";
import About from "../screen/about/about";
import Contact from "../screen/contact/contact";
import Services from "../screen/services/services";
import Users from "../screen/users/users";
import User from "../screen/user/user";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
