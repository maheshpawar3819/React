import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adddata } from "../Utilis/demoslice";

const useFetchapidemo = () => {
  const dispatch = useDispatch();

  const apifetch = () => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((data) => {
        console.log(data?.data);
        dispatch(adddata(data?.data));
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
