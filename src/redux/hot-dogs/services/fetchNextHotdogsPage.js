import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHotdogsHasMore,
  getHotdogsLoading,
  getHotdogsPage,
} from "../selectors/hotdogsSelectors";
import { fetchHotdogs } from "./fetchHotdogs";
import { hotdogsActions } from "../slice/hotdogsSlice";

export const fetchNextHotdogsPage = createAsyncThunk(
  "hotdogs/fetchNextHotdogsPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getHotdogsPage(getState());
    const hasMore = getHotdogsHasMore(getState());
    const loading = getHotdogsLoading(getState());

    if (hasMore && !loading) {
      dispatch(hotdogsActions.setPage(page + 1));
      dispatch(fetchHotdogs());
    }
  }
);
