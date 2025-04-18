import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import movieReducer from "../slices/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
