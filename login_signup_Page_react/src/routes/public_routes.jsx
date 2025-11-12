import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "../pages/login/login";

const Public_routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Public_routes;
