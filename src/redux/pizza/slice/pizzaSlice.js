import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "../services/fetchPizza";

const initialState = {
  pizza: [],
  isLoading: false,
  errors: null,
  page: 0,
  limit: 4,
  hasMore: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });

    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizza = [...state.pizza, ...action.payload];
      state.hasMore = action.payload.length >= state.limit;
    });

    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: pizzaActions } = pizzaSlice;
export const { reducer: pizzaReducer } = pizzaSlice;
