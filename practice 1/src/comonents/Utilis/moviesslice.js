import { createSlice } from "@reduxjs/toolkit";

const moviesslice = createSlice({
  name: "movies",
  initialState: {
    addmovies: null,
  },
  reducers: {
    addmovies: (state, action) => {
      state.addmovies = action.payload;
    },
  },
});

export const { addmovies } = moviesslice.actions;
export default moviesslice.reducer;
