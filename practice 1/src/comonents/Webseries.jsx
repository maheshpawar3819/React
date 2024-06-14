import React from "react";
import axios from "axios";
import { useEffect } from "react";
const Webseries = () => {
  async function apidata() {
    try {
      const data = await axios.get(
        "https://api.mxplayer.in/v1/web/home/tab/a8ac883f2069d71784f4869e2bfe8340?device-density=2&userid=338729d4-08a1-40f4-bf7b-bc15dfac3fa7&platform=com.mxplay.mobile&content-languages=hi,en&pageSize=2&kids-mode-enabled=false"
      );
      console.log(data);
      console.log(data.data?.sections[0]?.items[0]?.id)
    
    } catch (error) {
      console.log("oops error was found", error);
    }
  }

  useEffect(() => {
    apidata();
  }, []);

  return <div></div>;
};

export default Webseries;
