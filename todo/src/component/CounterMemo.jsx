import React, { useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const IncrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const oddOrEven = () => {
    return counterOne % 2 === 0;
 // true if even, false if odd
  };

  return (
    <div>
      <button onClick={IncrementCounterOne}>Counter One: {counterOne}</button>
      <span>{oddOrEven() ? "Number is even" : "Number is odd"}</span>
      <br />
      <br />
      <button onClick={IncrementCounterTwo}>Counter Two: {counterTwo}</button>
    </div>
  );
}

export default Counter;
