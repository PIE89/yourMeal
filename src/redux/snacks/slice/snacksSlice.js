import { createSlice } from "@reduxjs/toolkit";
import { fetchSnacks } from "../services/fetchSnacks";

const initialState = {
  snacks: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const snacksSlice = createSlice({
  name: "snacks",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSnacks.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchSnacks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.snacks = [...state.snacks, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchSnacks.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: snacksActions } = snacksSlice;
export const { reducer: snacksReducer } = snacksSlice;
