import React, {useState } from "react";

function UseState() {

    const [count, setCount] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const increment = () => {
        setCount((c) => c + 1);
    };
    function clicks(){
        setClickCount(clickCount+1);
    }
    return (
      <div className="flex flex-col gap-8">
        <h1>useState</h1>
        <div >
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
    );
}


export default UseState;