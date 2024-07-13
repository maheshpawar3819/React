import { useState } from "react";
import "./App.css";

import ApiSearchmovies from "./comonents/ApiSearchmovies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Apicall/> */}
      {/* <Sw/> */}
      {/* <Webseries/> */}
      {/* <Starwarsapi/> */}
      {/* <Tndbapicall /> */}
      {/* <Demo/> */}
      <ApiSearchmovies />
    </>
  );
}

export default App;
