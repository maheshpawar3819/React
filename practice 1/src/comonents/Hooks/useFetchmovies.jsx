import { useEffect } from "react";
import axios from "axios";
import { Options } from "../Utilis/constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../Utilis/moviesslice";

const useFetchmovies = () => {
  const dispatch = useDispatch();
  const movies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        Options
      )
      .then((moviesdata) => {
        console.log(moviesdata?.data?.results);
        dispatch(addmovies(moviesdata?.data?.results));
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    movies();
  }, []);
};

export default useFetchmovies;
