import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../services/fetchProductItem";

const initialState = {
  product: [],
  isLoading: false,
  errors: null,
  count: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
      state.product = [];
      state.count = 0;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
