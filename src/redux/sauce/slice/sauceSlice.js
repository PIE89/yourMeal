import { createSlice } from "@reduxjs/toolkit";
import { fetchSauce } from "../services/fetchSauce";

const initialState = {
  sauce: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const sauceSlice = createSlice({
  name: "sauce",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSauce.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchSauce.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sauce = [...state.sauce, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchSauce.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: sauceActions } = sauceSlice;
export const { reducer: sauceReducer } = sauceSlice;
