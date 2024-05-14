import React from "react";
import { useState } from "react";

const Calculetor = () => {
  const [input1, setinput1] = useState(0);
  const [input2, setinput2] = useState(0);
  const [display, setdisplay] = useState(0);

  const value1 = (num1) => {
    setinput1(num1.target.value);
  };

  const value2 = (num2) => {
    setinput2(num2.target.value);
  };

  const add = () => {
    let result = Number(input1) + Number(input2);
    setdisplay(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="number 1"
        className="form-control my-4 col-2 offset-1"
        onChange={value1}
      />
      <input
        type="text"
        placeholder="number 2"
        className="form-control my-4 col-2 offset-1"
        onChange={value2}
      />
      <button className="btn btn-info offset-2 ps-5 pe-5 p-2" onClick={add}>
        Add
      </button>
      <p className=" border my-4 col-2 offset-6 p-2">{display}</p>
    </div>
  );
};

export default Calculetor;
