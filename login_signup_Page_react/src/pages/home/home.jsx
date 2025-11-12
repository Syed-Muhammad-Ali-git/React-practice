import React from "react";
import { useAuth } from "../../context/authUtils";
import Header from "../../components/header/header";

const Home = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>Home</h1>
      <Header title="Home" />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
