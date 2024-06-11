import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cards from "./Cards";
const Body = () => {
  const [data, setdata] = useState([]);

  const fetchdata = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((responese) => {
        console.log(responese);
        console.log(responese?.data);
        setdata(responese?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <header className="body-header">
        <h2>Shopping Cart</h2>
      </header>
      <div className="map">
        {data.map((info) => {
          return <Cards key={info.id} data={info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
