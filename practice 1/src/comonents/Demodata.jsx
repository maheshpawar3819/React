import React from "react";
import { useSelector } from "react-redux";
import Demolist from "./Demolist";

const Demodata = () => {
  const product = useSelector((store) => {
    return store.demo;
  });

  //   console.log(product);
  return (
    <div>
      <Demolist title={"Products"} products={product.adddata} />
    </div>
  );
};

export default Demodata;
