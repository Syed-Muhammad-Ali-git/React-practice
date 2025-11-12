import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/home";
import About from "../pages/about/about";

const Protected_routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Protected_routes;
