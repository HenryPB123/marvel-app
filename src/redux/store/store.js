import { configureStore } from "@reduxjs/toolkit";
import characters from "../slices/slice";

export default configureStore({
  reducer: {
    characters,
  },
});
