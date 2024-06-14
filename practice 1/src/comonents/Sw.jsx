import React, { useEffect } from "react";
import axios from "axios";
const Sw = () => {
  async function fetchdata() {
    try {
      const fetch = await axios.get(
        "https://www.swiggy.com/mapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
      );
      const json=fetch.data
      console.log(json);
    } catch (err) {
      console.log("woops error was found", err);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return <div></div>;
};

export default Sw;
