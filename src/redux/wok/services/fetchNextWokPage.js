import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getWokHasMore,
  getWokLoading,
  getWokPage,
} from "../selectors/wokSelectors";
import { fetchWok } from "./fetchWok";
import { wokActions } from "../slice/wokSlice";

export const fetchNextWokPage = createAsyncThunk(
  "wok/fetchNextWokPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getWokPage(getState());
    const hasMore = getWokHasMore(getState());
    const loading = getWokLoading(getState());

    if (hasMore && !loading) {
      dispatch(wokActions.setPage(page + 1));
      dispatch(fetchWok());
    }
  }
);
