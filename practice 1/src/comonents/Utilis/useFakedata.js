import axios from "axios";
import { useState, useEffect } from "react";

const useFakedata = () => {
  const [info, setInfo] = useState([]);
  const data = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return info;
};

export default useFakedata;
