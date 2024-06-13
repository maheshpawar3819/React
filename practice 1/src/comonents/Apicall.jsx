import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Apicall = () => {
  const [state, setState] = useState([]);

  const Products = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setState(response.data);
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Products();
  }, []);

  return (
    <div className="row" style={{ width: "100vw" }}>
      <h1 className="text-secondary " style={{ textAlign: "center" }}>
        Cloth Store
      </h1>
      {state.map((ele) => {
       
        return (
          <div
          key={ele.id}
            className="col-4 p-4"
            style={{ border: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <h2>Product {ele.id}</h2>
            <h4 className="text-dark">{ele.title}</h4>
            <img
              src={ele.image}
              alt=""
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Apicall;
