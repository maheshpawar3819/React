import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Apicall = () => {
  const [state, setState] = useState([]);

  const products = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //mounting behaviour
  useEffect(function () {
    products();
  }, []);

  return (
    <div>
      {state.map((ele) => {
        <div className="col-4">
          <h1>{ele.title}</h1>
          <img src={ele.imgage} alt="" />
        </div>
      })}
    </div>
  );
};

export default Apicall;
