import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import State from "./Components/State";
import Aapi from "./Components/Aapi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Aapi />
      {/* <Body/> */}
      {/* <State/> */}
    </>
  );
}

export default App;
