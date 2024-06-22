import { createSlice } from "@reduxjs/toolkit";
import { fetchCombo } from "../services/fetchCombo";

const initialState = {
  combo: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const comboSlice = createSlice({
  name: "combo",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCombo.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchCombo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.combo = [...state.combo, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchCombo.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: comboActions } = comboSlice;
export const { reducer: comboReducer } = comboSlice;
