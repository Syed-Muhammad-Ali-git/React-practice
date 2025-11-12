import React from "react";

const Header = (props) => {
  const pageName = props.title;
  return (
    <>
      <h1>{pageName} page!</h1>
    </>
  );
};

export default Header;
