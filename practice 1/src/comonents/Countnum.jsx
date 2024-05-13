import React from "react";
import { useState } from "react";

const Countnum = () => {
    const [state,setState]=useState('hii mahi')
  return <div>
    <p className="mt-5">
    {state}
    </p>

    <button className="btn btn-info m-4">
        Increment
    </button>
    <button className="btn btn-danger">
        Decrement
    </button>
  </div>;
};

export default Countnum;
