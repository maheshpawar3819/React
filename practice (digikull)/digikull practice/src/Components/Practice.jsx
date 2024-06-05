import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Practice = () => {
  const [data, setdata] = useState([]);

  const api = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);

        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <div>
      {data.map((ele) => {
        return (
          <div key={ele.id} style={{width:"50vw", border:"2px solid black", textAlign:"center"}}>
            <h3>{ele.category}</h3>
            <p style={{ color: "red" }}>{ele.description}</p>
            <img style={{width:"75px"}} src={ele.image} alt="" />
            <h2>{ele.price}</h2>
            <h3>{ele.rating.rate}</h3>
            <h2>{ele.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Practice;
