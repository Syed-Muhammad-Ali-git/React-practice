function UserDetail(props) {
  const { userName, age, email } = props;

  return (
    <div className="mt-5 space-y-4">
      <div>
        <h2>
          <b>Name:</b> {userName}
        </h2>
      </div>
      <div>
        <h2>
          <b>Age:</b> {age}
        </h2>
      </div>
      <div>
        <h2>
          <b>Email:</b> {email}
        </h2>
      </div>
    </div>
  );
}

export default UserDetail;
