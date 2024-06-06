import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [restaurent,setrestaurent]=useState([]);

  useEffect(() => fetchdata(),[]);

  const fetchdata= async () => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860");
    const json=await data.json();

    console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    setrestaurent(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  }
  return (
    <div>
      

    </div>
  );
};

export default Home;
