import { useEffect } from "react";
import axios from "axios";

const useFetchapidemo = () => {
  const apifetch = () => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    apifetch();
  }, []);
};

export default useFetchapidemo;
