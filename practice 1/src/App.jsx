import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./comonents/Child";
function App() {
  const [count, setCount] = useState(0);

  const add=(prop) => {
    let sum=prop.input1+prop.input2;
    setAdd(sum);
  }
  return (
    <>
      {/* <Listtable/> */}
      {/* <Concatword /> */}
      {/* <Todo/> */}
      <Child add={add}/>
     
    </>
  );
}

export default App;
