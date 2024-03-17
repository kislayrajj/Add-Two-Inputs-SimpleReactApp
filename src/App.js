import "./App.css";
import React from "react";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    document.querySelector(".count-box ").style.color = "green";
  };

  const decreaseCount = () => {
    if (count > -5) {
      setCount(count - 1);
      document.querySelector(".count-box ").style.color = "red";
    } else {
      setCount(0);
      alert("The value cannot fall below -5.");
    }
  };

  const resetCount = () => {
    setCount(0);
    document.querySelector(".count-box ").style.color = "black";
  };

  return (
    <div className="m-1 h-screen flex justify-center items-center  ">
      <div className=" p-2 h-1/2 min-w-1/4 border-2  border-black rounded-2xl flex flex-col  items-center bg-blue-300">
        <div className="count-box   text-center p-12 text-5xl"> {count}</div>
        <div className=" flex justify-around gap-5">
          <button
            onClick={increaseCount}
            className="inc h-12 w-24 border-2 rounded-xl border-green-600 p-2  bg-green-300/50 hover:bg-green-400/50 ">
            {" "}
            Increase
          </button>

          <button
            onClick={decreaseCount}
            className="dic h-12 w-24 border-2 rounded-xl  border-red-600 p-2  bg-red-300/50 hover:bg-red-400/50 order-last">
            Decrease
          </button>
          <button
            onClick={resetCount}
            className="reset h-12 w-24 border-2 rounded-xl border-black p-2  ">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
