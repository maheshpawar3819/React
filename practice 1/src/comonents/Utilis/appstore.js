import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./demoslice";
import movieReducer from "./moviesslice";
const store = configureStore({
  reducer: {
    demo: demoReducer,
    movie: movieReducer,
  },
});

export default store;
