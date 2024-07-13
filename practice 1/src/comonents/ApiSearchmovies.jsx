import React from "react";
import Movies from "./Movies";
import useFetchmovies from "./Hooks/useFetchmovies";
const ApiSearchmovies = () => {
  useFetchmovies();

  return (
    <div>
      <Movies />
    </div>
  );
};

export default ApiSearchmovies;
