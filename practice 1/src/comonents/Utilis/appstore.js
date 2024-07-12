import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./demoslice";

const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
});

export default store;
