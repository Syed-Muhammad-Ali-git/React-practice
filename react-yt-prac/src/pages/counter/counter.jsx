import { useState } from "react";

function BtnInncrementDecrement() {
  const [count, setCount] = useState(0);
  return (
    <div className="card flex flex-col mt-4">
      <div>
        <h1 className="ml-24 ">Count: {count} </h1>
      </div>
      <div>
        <button
          className="border rounded p-1 m-4"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="border rounded p-1 m-4"
          onClick={() => setCount(count > 0 ? count - 1 : count)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default BtnInncrementDecrement;
