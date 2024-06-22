import { createSlice } from "@reduxjs/toolkit";
import { fetchDessert } from "../services/fetchDessert";

const initialState = {
  dessert: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const dessertSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDessert.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchDessert.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dessert = [...state.dessert, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchDessert.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: dessertActions } = dessertSlice;
export const { reducer: dessertReducer } = dessertSlice;
