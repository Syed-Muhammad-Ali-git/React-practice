function UserDetail(props) {
  const { userName, age, email } = props;
  return (
    <div>
      <h2>
        Name: {userName} <br /> Age: {age} <br /> Email: {email}
      </h2>
      <hr />
    </div>
  );
}

export default UserDetail;
