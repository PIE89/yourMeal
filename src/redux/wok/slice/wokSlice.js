import { createSlice } from "@reduxjs/toolkit";
import { fetchWok } from "../services/fetchWok";

const initialState = {
  wok: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const wokSlice = createSlice({
  name: "wok",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWok.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchWok.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wok = [...state.wok, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchWok.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: wokActions } = wokSlice;
export const { reducer: wokReducer } = wokSlice;
