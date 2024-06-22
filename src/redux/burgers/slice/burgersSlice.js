import { createSlice } from "@reduxjs/toolkit";
import { fetchBurgers } from "../services/fetchBurgers";

const initialState = {
  burgers: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.burgers = [...state.burgers, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchBurgers.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: burgersActions } = burgersSlice;
export const { reducer: burgersReducer } = burgersSlice;
