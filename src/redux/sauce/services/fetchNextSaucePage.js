import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSauceHasMore,
  getSauceLoading,
  getSaucePage,
} from "../selectors/sauceSelectors";
import { sauceActions } from "../slice/sauceSlice";
import { fetchSauce } from "./fetchSauce";

export const fetchNextSaucePage = createAsyncThunk(
  "sauce/fetchNextSaucePage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getSaucePage(getState());
    const hasMore = getSauceHasMore(getState());
    const loading = getSauceLoading(getState());

    if (hasMore && !loading) {
      dispatch(sauceActions.setPage(page + 1));
      dispatch(fetchSauce());
    }
  }
);
