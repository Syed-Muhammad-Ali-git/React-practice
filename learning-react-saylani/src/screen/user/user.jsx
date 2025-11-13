import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();

  return (
    <>
      <h1>user</h1>
      <div>user {id}</div>
    </>
  );
};

export default User;
