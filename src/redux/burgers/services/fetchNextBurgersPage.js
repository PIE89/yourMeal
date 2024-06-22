import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBurgersHasMore,
  getBurgersLoading,
  getBurgersPage,
} from "../selectors/burgersSelectors";
import { burgersActions } from "../slice/burgersSlice";
import { fetchBurgers } from "./fetchBurgers";

export const fetchNextBurgersPage = createAsyncThunk(
  "burgers/fetchNextBurgersPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getBurgersPage(getState());
    const hasMore = getBurgersHasMore(getState());
    const loading = getBurgersLoading(getState());

    if (hasMore && !loading) {
      dispatch(burgersActions.setPage(page + 1));
      dispatch(fetchBurgers());
    }
  }
);
