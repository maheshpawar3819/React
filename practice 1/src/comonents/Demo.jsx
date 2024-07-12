import React, { useEffect, useState } from "react";
import Demochild from "./Demochild";
import useFetchapidemo from "./Hooks/useFetchapidemo";
const Demo = () => {
  const [data, setData] = useState("hii mahi");

  useFetchapidemo();
  
  const arr = ["mahesh", "sneha", "shiv", "devansh", "sanket", "suraj"];

  return (
    <div>
      hii my name is mahesh pawar
      <div>
        {arr.map((ele, index) => {
          return (
            <Demochild
              //   name={"mahesh"}
              //   sirname={"pawar"}
              //   data={data}
              key={index}
              items={ele}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Demo;
