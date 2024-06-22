import { createSlice } from "@reduxjs/toolkit";
import { fetchHotdogs } from "../services/fetchHotdogs";

const initialState = {
  hotdogs: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const hotdogsSlice = createSlice({
  name: "hotdogs",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotdogs.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchHotdogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotdogs = [...state.hotdogs, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchHotdogs.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: hotdogsActions } = hotdogsSlice;
export const { reducer: hotdogsReducer } = hotdogsSlice;
