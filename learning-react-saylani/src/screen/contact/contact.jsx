import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";

function Contact() {
  const [count, setCount] = useState(0);

  const stunning = ["S", "t", "u", "n", "n", "i", "n", "g"];

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      if (count == stunning.length - 1) setCount(0);
    }, 200);
  }, [count]);
  return (
    <>
      <Header title="contact" />
      <h1 className="text-4xl">
        {stunning.map((item, index) => {
          return (
            <span
            className="text-7xl"
              key={index}
              style={{ color: index == count ? "red" : "black" }}
            >
              {item}
            </span>
          );
        })}
      </h1>
    </>
  );
}
export default Contact;
