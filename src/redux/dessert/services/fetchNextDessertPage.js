import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDessertHasMore,
  getDessertLoading,
  getDessertPage,
} from "../selectors/dessertSelectors";
import { fetchDessert } from "./fetchDessert";
import { dessertActions } from "../slice/dessertSlice";

export const fetchNextDessertPage = createAsyncThunk(
  "dessert/fetchNextDessertPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getDessertPage(getState());
    const hasMore = getDessertHasMore(getState());
    const loading = getDessertLoading(getState());

    if (hasMore && !loading) {
      dispatch(dessertActions.setPage(page + 1));
      dispatch(fetchDessert());
    }
  }
);
