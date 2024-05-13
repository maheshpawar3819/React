import React from "react";
import { useState } from "react";

const Countnum = () => {
  const [state, setState] = useState("hii mahi");

  function Increment(num){
    setState(num++);
    
  }

  function Decrement(num){
    setState(num--);
  }
  return (

    <div>
      <p className="mt-5">{state}</p>

      <button className="btn btn-info m-4" onClick={Increment}>Increment</button>
      <button className="btn btn-danger" onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Countnum;
