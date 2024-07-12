import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./demoslice"
const appsotre = configureStore({
  reducer: {
    demo: demoReducer,
  },
});

export default appsotre;
