import React from "react";
import { useEffect, useState } from "react";

const Apicall2 = () => {
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/1`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("something wrong cannot able to fetch data ");
    }
  };

  return <div>hii</div>;
};

export default Apicall2;
