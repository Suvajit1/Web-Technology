import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currCount) => {
      return currCount + 1;
    });
  };

  let incCounty = () => {
    setCounty((currCounty) => currCounty + 1);
  };

  useEffect(
    function printSomething() {
      console.log("This is a side effect");
    },
    [countx] // Only run the effect if countx changes // dependency array
  );

  //   useEffect(
  //     function printSomething() {
  //       console.log("This is a side effect");
  //     },
  //     [] // for only once
  //   );

  return (
    <div>
      <h3>countx = {countx}</h3>
      <button onClick={incCountx}>+1</button>

      <h3>county = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
