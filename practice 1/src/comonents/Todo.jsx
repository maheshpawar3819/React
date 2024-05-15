import React from "react";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([
    
  ]);

  const handlechange = (event) => {
    setInput(event.target.value);
  };

  const addtask=() => {
    const newArray=[...display,input];
    setDisplay(newArray);
  }

  return (
    <div>
      <h1 className="text-secondary mt-4 offset-2">To Do App</h1>
      <input
        type="text"
        placeholder="Enter the task here"
        className="form-control offset-1 mt-5 p-3"
        onChange={handlechange}
      />
      <button
        className="btn btn-danger col-2 mt-4 offset-2 text-light"
        onClick={addtask}
      >
        Add Task
      </button>
      <div className="border  col-18 offset-2 mt-4">
        {display.map((ele) => {
          return <li className="list-group-item">{ele}</li>;
        })}
      </div>
    </div>
  );
};

export default Todo;
