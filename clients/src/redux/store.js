import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice } from "./features/loadingSlice";

export default configureStore({
  reducer: {
    loadings: loadingSlice.reducer,
  },
});