import Swal from "sweetalert2";

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
  setPassword(newPassword);
  passRef.current.focus();

  Swal.fire({
    title: "New Password Generated!",
    icon: "success",
    draggable: true,
  });
};

export default HandleForgot;
