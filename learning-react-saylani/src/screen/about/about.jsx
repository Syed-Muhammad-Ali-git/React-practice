import Header from "../../components/header/header";
import fruits from "../../utils/data";
function About() {
  return (
    <div>
      <Header title="about" />
      <ul>
        {fruits.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
    </div>
  );
}
export default About;
