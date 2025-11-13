import { useState } from "react";
import "./App.css";
import RoutesOfPages from "./utils/routes";

function App() {
  const [gender, setGender] = useState("Male");

  return (
    <>
      <RoutesOfPages />
      <div>
        <h1>Handle Radio and Dropdown</h1>
        <h4>Select gender</h4>

        <input
          value="Male"
          checked={gender === "Male"}
          type="radio"
          name="gender"
          id="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="Male">Male</label>

        <input
          value="Female"
          checked={gender === "Female"}
          type="radio"
          name="gender"
          id="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="Female">Female</label>

        <h2>Select Gender: {gender}</h2>
      </div>
    </>
  );
}

export default App;
