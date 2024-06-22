import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSnacksHasMore,
  getSnacksLoading,
  getSnacksPage,
} from "../selectors/snacksSelectors";
import { snacksActions } from "../slice/snacksSlice";
import { fetchSnacks } from "./fetchSnacks";

export const fetchNextSnacksPage = createAsyncThunk(
  "snacks/fetchNextSnacksPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getSnacksPage(getState());
    const hasMore = getSnacksHasMore(getState());
    const loading = getSnacksLoading(getState());

    if (hasMore && !loading) {
      dispatch(snacksActions.setPage(page + 1));
      dispatch(fetchSnacks());
    }
  }
);
