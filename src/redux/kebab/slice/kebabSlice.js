import { createSlice } from "@reduxjs/toolkit";
import { fetchKebab } from "../services/fetchKebab";

const initialState = {
  kebab: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const kebabSlice = createSlice({
  name: "kebab",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchKebab.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchKebab.fulfilled, (state, action) => {
      state.isLoading = false;
      state.kebab = [...state.kebab, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchKebab.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: kebabActions } = kebabSlice;
export const { reducer: kebabReducer } = kebabSlice;
