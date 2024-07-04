import { useState } from "react";
import "./App.css";
import Tndbapicall from "./comonents/Tndbapicall";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Apicall/> */}
      {/* <Sw/> */}
      {/* <Webseries/> */}
      {/* <Starwarsapi/> */}
      <Tndbapicall />
    </>
  );
}

export default App;
