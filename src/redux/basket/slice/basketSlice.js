import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  isLoading: false,
  errors: null,
  totalCount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.basket.find((res) => {
        return (
          JSON.stringify(res.product) ===
            JSON.stringify(action.payload.product) &&
          JSON.stringify(res.id) === JSON.stringify(action.payload.id)
        );
      });

      if (item) {
        item.count++;
        state.totalCount++;
      } else {
        action.payload.count++;
        state.basket.push(action.payload);
        state.totalCount++;
      }
    },
    deleteItem(state, action) {
      const item = state.basket.find((res) => {
        return (
          JSON.stringify(res.product) ===
            JSON.stringify(action.payload.product) &&
          JSON.stringify(res.id) === JSON.stringify(action.payload.id)
        );
      });

      if (item.count > 1) {
        item.count--;
        state.totalCount--;
      } else {
        const itemIndex = state.basket.findIndex((res) => {
          return (
            JSON.stringify(res.product) ===
              JSON.stringify(action.payload.product) &&
            JSON.stringify(res.id) === JSON.stringify(action.payload.id)
          );
        });

        state.basket = state.basket.toSpliced(itemIndex, 1);

        state.totalCount--;
      }
    },
  },
});

export const { actions: basketActions } = basketSlice;
export const { reducer: basketReducer } = basketSlice;
