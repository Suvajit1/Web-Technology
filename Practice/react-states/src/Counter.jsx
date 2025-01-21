import { useState } from "react";

function init() {
  console.log("init was executed!");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init);

  //   // use call-back
  //   let incCount = () => {
  //     setCount((currCount) => {
  //       return currCount + 1;
  //     });
  //     setCount((currCount) => {
  //       return currCount + 1;
  //     });
  //     setCount((currCount) => {
  //       return currCount + 1;
  //     });
  //   };

  console.log("Component was re-render");
  let incCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>increase count</button>
    </div>
  );
}
