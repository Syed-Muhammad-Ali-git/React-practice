const Header = (props) => {
  const { title, color } = props;
  return (
    <>
      <h1 style={{ textTransform: "capitalize", color: "green" }}>
        {title} screen!
      </h1>
    </>
  );
};

export default Header;
