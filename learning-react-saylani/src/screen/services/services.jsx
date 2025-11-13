import { useState, useEffect } from "react";

const Services = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  let handleTimer;

  useEffect(() => {
    handleTimer = setInterval(() => {
      const rightNow = new Date().toLocaleTimeString();
      setTime(rightNow);
    }, 1000);

    // ya return page change hona par ya kaam ko rook daiga
    return () => {
      console.log("stop");
      clearInterval(handleTimer);
    };
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <h1>{time} </h1>
    </div>
  );
};

export default Services;
