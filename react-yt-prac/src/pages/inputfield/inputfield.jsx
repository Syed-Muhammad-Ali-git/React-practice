import { useState, useRef, useEffect } from "react";

const InputField = () => {
  const [name, setName] = useState("");
  const [pass, setpass] = useState("");
  const [email, setEmail] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <hr />
      <br />
      <form action="">
        <input
          ref={inputRef}
          type="text"
          className="border p-2 rounded"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          type="password"
          className="border p-2 rounded"
          onChange={(event) => setpass(event.target.value)}
          placeholder="Enter password"
        />
        <br />
        <br />
        <input
          type="text"
          className="border p-2 rounded"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <button
          className="border p-1 rounded"
          onClick={() => {
            setName("");
            setpass("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <br />
        <h1>{name}</h1>
        <h1>{pass}</h1>
        <h1>{email}</h1>
        <br />
      </form>
    </>
  );
};

export default InputField;
