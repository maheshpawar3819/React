import React from "react";
import { useState } from "react";

const Concatword = () => {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [result, setresult] = useState("");

  let text1 = (event) => {
    setinput1(event.target.value);
  };
  let text2 = (event) => {
    setinput2(event.target.value);
  };

  let add=() => {
    let result=input1+input2;
    setresult(result);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter word"
        className="form-control col-2 offset-1 mt-5"
        onChange={text1}
      />
      <input
        type="text"
        placeholder="Enter word"
        className="form-control col-2 offset-1 mt-5"
        onChange={text2}
      />

      <button className="btn btn-info mt-5 offset-2 p-2 ps-5 pe-5 " onClick={add}>
        Join
      </button>
      <p className="border col-2 offset-6 mt-5 p-4 text-danger fs-4">
        {result}
      </p>
    </div>
  );
};

export default Concatword;
