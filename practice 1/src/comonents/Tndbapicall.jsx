import axios from "axios";
import React, { useEffect, useState } from "react";

const Tndbapicall = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjViMTdlNjljMWI2ZTFmNzY2NzQ3MzgwOTFlY2RhZiIsIm5iZiI6MTcyMDA3NzUyNS41OTAzMDIsInN1YiI6IjY2ODY0YTUxN2RhYjY0YzY4NTgxYTk4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gY0f9AiN5ZipbT_oMXkj1Ly378DWMN0xBzqXWcnNnBA",
    },
  };

  const fetchmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("something wrong", error);
      });
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  return <div></div>;
};

export default Tndbapicall;
