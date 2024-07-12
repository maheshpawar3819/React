import { createSlice } from "@reduxjs/toolkit";

const demoslice = createSlice({
  name: "demo",
  initialState: {
    adddata: "",
  },
  reducers: {
    adddata: (state, action) => {
      state.adddata = action.payload;
    },
  },
});

export const { adddata } = demoslice.actions;
export default demoslice.reducer;
