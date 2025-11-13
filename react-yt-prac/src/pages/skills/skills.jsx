import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <div>
      <h1> Skills:</h1>
      <input type="checkbox" onChange={handleSkills} id="js" value="javascript" />
      <label htmlFor="js">Javascript</label>
      <br />
      <br />
      <input type="checkbox" onChange={handleSkills} id="Html" value="Html" />
      <label htmlFor="Html">Html</label>
      <br />
      <br />
      <input type="checkbox" onChange={handleSkills} id="css" value="css" />
      <label htmlFor="css">css</label>
      <br />
      <br />
      <input type="checkbox" onChange={handleSkills} id="react" value="react" />
      <label htmlFor="react">react</label>
      <br />
      <br />
      <h1>{skills.toString()}</h1>
    </div>
  );
};
export default Skills;
