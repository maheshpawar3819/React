import React from "react";
import { useEffect } from "react";
import axios from "axios";
const Starwarsapi = () => {
  const callapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646355687&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        // console.log(response);
        let result=response.data.data.items[0].title
        ;
        console.log(result);
      })
      .catch((err) => {
        console.log("error was found", err);
      });
  };

  useEffect(() => {
    callapi();
  }, []);

  return <div></div>;
};

export default Starwarsapi;
