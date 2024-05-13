import React from "react";
import { useState } from "react";

const Calculetor = () => {
  const [state, setState] = useState(0);
  return (
    <div>
        
      <input type="text" placeholder="number 1" className="form-control my-4 col-2 offset-1" />
      <input type="text" placeholder="number 2" className="form-control my-4 col-2 offset-1" />
      <button className="btn btn-info offset-1 ps-5 pe-5 p-2">
        Add
      </button>
        <p className=" border my-4 col-2 offset-1">
            {state}
        </p>
    </div>
  );
};

export default Calculetor;
