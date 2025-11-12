const HandleForgot = ({ email, setPassword, setShowPass, passRef }) => {
  if (!email) {
    setShowPass(true);
    setPassword("Please enter your email first");
    passRef.current.focus();
    return;
  }

  // Simulate password reset by generating a random password
  const newPassword = Math.random().toString(36).slice(-8);
  setShowPass(true);
  setPassword(`Your new password is: ${newPassword}`);
  passRef.current.focus();
};

export default HandleForgot;
