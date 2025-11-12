import React from "react";
import Protected_routes from "./protected_routes";
import Public_routes from "./public_routes";
import { useAuth } from "../context/authUtils";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated ? <Protected_routes /> : <Public_routes />}</>;
};

export default AppRoutes;
