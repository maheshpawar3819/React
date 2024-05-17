import React from "react";
import { useState } from "react";

const Child = (props) => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [add, setAdd] = useState(0);

  const change1 = (num1) => {
    let first = num1.target.value;
    setInput1(first);
  };

  const change2 = (num2) => {
    let second = num2.target.value;
    setInput2(second);
  };


  return (
    <div>
      <h1 className="offset-2 text-secondary">Add Numbers</h1>
      <input type="text" className="form-control offset-1 mt-5"  onChange={change1}/>
      <input type="text" className="form-control offset-1 mt-5" onChange={change2}/>

      <button className="btn btn-danger mt-4 offset-2 ps-4 pe-4 p-2" onClick={}>
        Add
      </button>
      <p className="border col-6 offset-4 mt-3"></p>
    </div>
  );
};

export default Child;
