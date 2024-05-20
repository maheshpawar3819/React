import React from "react";
import ReactDOM from "react-dom/client";


const Mainheading=() => {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Name of The Author</h1>
    </>
  )
}

const Heading = () => {
  return (
    <>
      <Mainheading/>
      <ol>
        <li>Mahesh</li>
        <li>Dhanaji</li>
        <li>Pawar</li>
      </ol>
    </>
  );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
