// import pkg from "@reduxjs/toolkit";
// const { createSlice } = pkg;
import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters", //nombre del estado

  initialState: {
    characters: [],
  }, //stado

  reducers: {
    //  actions
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
