import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Apicall2 = () => {
  const [data,setData]=useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
      const data = await response.json();
      console.log(data);
      setData(data)
    } catch (error) {
      console.error("something wrong cannot able to fetch data ");
    }
  };

  return <div>
    {
      data.map((ele) => {
        //destructure the data
        const {id,title,price,description}=ele;
        return <ul key={id}>
          <li>
          {title}
          </li>
          <li>
            {price}
          </li>
          <li>
            {description}
          </li>
        </ul>
      })
    }
  </div>;
};

export default Apicall2;
