import { useState } from "react";
import Header from "../../components/header/header";

function Home() {
  const [count, setCount] = useState(0);
  function handelCountIncrement() {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  function handelCountDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <Header title="home" color="green" />
      <h1 style={{ color: count % 2 == 0 ? "orange" : "blue" }}>
        Count: {count}
        {count % 2 == 0 ? " Even" : " Odd"}
      </h1>
      <button onClick={handelCountIncrement}>Increment</button>
      <button onClick={handelCountDecrement}>Decrement</button>
    </div>
  );
}
export default Home;
