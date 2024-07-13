import React from "react";
import { useSelector } from "react-redux";
import { loadingimg } from "./Utilis/constants";
const Movies = () => {
  const movies = useSelector((store) => store.movie.addmovies);
  console.log(movies?.[0]);
  //   console.log(movies)
  return (
    <div>
      {movies && movies.length > 0 ? (
        <>
          <h1>{movies?.[0]?.original_title}</h1>
          <img src={loadingimg + movies?.[0]?.poster_path} alt="movie poster" />
        </>
      ) : (
        <p>data not updated</p>
      )}
    </div>
  );
};

export default Movies;
