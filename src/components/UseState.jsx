import React, { useState } from "react";
import GoBack from "./GoBack";

function UseState() {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  function clicks() {
    setClickCount(clickCount + 1);
  }
  return (
    <>
    <div className="gap-8 flex flex-col items-center justify-center">
      <div className="flex gap-10 flex-col items-center justify-center w-3/4">
        <h1>useState</h1>
        <p>
          State as a Snapshot explains why this is happening. Setting state
          requests a new re-render, but does not change it in the already
          running code. So score continues to be 0 right after you call
          setScore(score +1).
        </p>
        <div>
          <button
            className="mx-2 my-2"
            onClick={() => {
              increment();
              clicks();
            }}
          >
            +1
          </button>
          <button
            className="mx-2 my-2"
            onClick={() => {
              increment();
              increment();
              increment();
              clicks();
            }}
          >
            +3
          </button>
          <p>Number of clicks: {clickCount}</p>
          <p>Count is: {count}</p>
        </div>
      </div>
      <div className="mt-10">
        <GoBack/>
      </div>
    </div>
    </>
  );
}

export default UseState;
