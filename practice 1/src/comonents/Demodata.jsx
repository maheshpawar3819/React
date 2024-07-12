import React from "react";
import { useSelector } from "react-redux";

const Demodata = () => {
  const product = useSelector((store) => {
    return store.demo;
  });

  return (
    <div>
      <h1>hii demo data</h1>
      <p>{product.adddata}</p>
      <p></p>
      <h1></h1>
      <p></p>
    </div>
  );
};

export default Demodata;
