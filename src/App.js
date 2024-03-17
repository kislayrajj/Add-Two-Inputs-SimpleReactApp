import "./App.css";
import React from "react";
import { useState } from "react";

const App = () => {
const [firstInput,setFirstInput] = useState("")
const [secondInput,setSecondInput] = useState("");
const [displayValue,setDisplayValue] = useState("");

const handleEnter=(e)=>{
  setFirstInput(e.target.value)
  setDisplayValue("")
}

const handleEnter2=(e)=>{
  setSecondInput(e.target.value)
  setDisplayValue("")
}
const AddInputs=()=>{
  if(firstInput!== "" && secondInput!== ""){
  let result = parseInt(firstInput)+parseInt(secondInput);
  let output = `${firstInput} + ${secondInput} = ${result}`;
  setDisplayValue(output);
  setFirstInput("");
  setSecondInput("");
  }else if(firstInput== "" || secondInput== ""){
    alert("Please enter two numbers");  
  }
}

const handleReset=()=>{
  setFirstInput("")
  setSecondInput("")
  setDisplayValue("")
}




  return (
    <div className="h-screen flex justify-center items-center  ">
      <div className="h-1/2 min-w-1/2 p-2 border-2 border-black rounded-3xl bg-red-200/20 ">
        <h1 className="p-2 text-center text-xl font-semibold tracking-wider">Enter Values to Add</h1>
        <div className=" mt-10 flex justify-center gap-12 ">
          <input type="number" placeholder="enter a number" onChange={handleEnter} value={firstInput} className="p-1 w-1/3 h-12 border-2 border-black rounded-md"/>
          <input type="number" placeholder="enter a number" onChange={handleEnter2} value={secondInput} className="p-1  w-1/3 h-12  border-2 border-black rounded-md"/>
        </div>
        <div className=" m-2 pt-10 flex justify-center gap-12">
        <button onClick={AddInputs} className="p-2 w-1/3 h-12 border-2 border-black rounded-md bg-green-200 hover:bg-green-400">Add</button>
        <div className=" p-2 min-w-52 h-24 border-2 border-black rounded-md bg-white">{displayValue}</div>
        </div>
       <div className="flex justify-center p-2 mt-4">
       <button onClick={handleReset} className="p-2 w-1/3 h-12 border-2 border-black rounded-md text-white bg-black/60 hover:bg-black/90">Reset</button>
       </div>
      
      </div>
    </div>
  );
};

export default App;
