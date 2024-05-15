import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./comonents/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Listtable/> */}
      {/* <Concatword /> */}
      <Todo/>
    </>
  );
}

export default App;
