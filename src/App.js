import "./App.css";
import React from "react";
import Counter from "./Apps/Counter.js";
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleEnter = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (userInput !== "") {
      let newValue =
        userInput[0].toUpperCase() + userInput.slice(1).toLocaleLowerCase();
      let finalValue = newValue.slice(0, 20);
      setDisplayValue(finalValue);
      setUserInput("");
    } else {
      let promptInput = prompt("Plese Enter Your Name");
      setDisplayValue(promptInput);
      setUserInput("");
    }
  };

  const handleReset = () => {
    setDisplayValue("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" m-2 p-5 flex flex-col h-1/2 min-w-1/2  border-2 border-black justify-center gap-8 items-center bg-yellow-200">
        <input
          type="text"
          name="Your Name"
          id="name"
          placeholder="Enter Your Text"
          value={userInput}
          onChange={handleEnter}
          className="border-2 border-black  h-12 "
        />
        <button
          onClick={handleClick}
          className="p-2 h-12 w-24 border-2 border-black rounded-xl bg-green-200 hover:bg-green-400">
          Show{" "}
        </button>
        <div className=" h-12 w-full p-2 border-2 border-black bg-white ">
          {displayValue}
        </div>
        <button
          onClick={handleReset}
          className="p-2 h-12 w-24 border-2 border-black rounded-xl bg-red-300 hover:bg-red-400">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
