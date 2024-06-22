import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPizzaHasMore,
  getPizzaLoading,
  getPizzaPage,
} from "../selectors/pizzaSelectors";
import { fetchPizza } from "./fetchPizza";
import { pizzaActions } from "../slice/pizzaSlice";

export const fetchNextPizzaPage = createAsyncThunk(
  "pizza/fetchNextPizzaPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getPizzaPage(getState());
    const hasMore = getPizzaHasMore(getState());
    const loading = getPizzaLoading(getState());

    if (hasMore && !loading) {
      dispatch(pizzaActions.setPage(page + 1));
      dispatch(fetchPizza());
    }
  }
);
