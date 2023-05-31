// import pkg from "@reduxjs/toolkit";
// const { createSlice } = pkg;
import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters", //nombre del estado

  initialState: {
    characters: [],
    character: [],
  }, //stado

  reducers: {
    //  actions
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacters, setCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
