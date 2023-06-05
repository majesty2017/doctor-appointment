import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loadings",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },

    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;