import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sw from "./comonents/Sw";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Apicall/> */}
      <Sw/>
    </>
  );
}

export default App;
