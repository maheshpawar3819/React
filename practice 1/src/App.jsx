import { useState } from "react";
import "./App.css";
import Demo from "./comonents/Demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Apicall/> */}
      {/* <Sw/> */}
      {/* <Webseries/> */}
      {/* <Starwarsapi/> */}
      {/* <Tndbapicall /> */}
      <Demo/>
    </>
  );
}

export default App;
