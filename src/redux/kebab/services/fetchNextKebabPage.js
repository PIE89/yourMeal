import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getKebabHasMore,
  getKebabLoading,
  getKebabPage,
} from "../selectors/kebabSelectors";
import { fetchKebab } from "./fetchKebab";
import { kebabActions } from "../slice/kebabSlice";

export const fetchNextKebabPage = createAsyncThunk(
  "kebab/fetchNextKebabPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getKebabPage(getState());
    const hasMore = getKebabHasMore(getState());
    const loading = getKebabLoading(getState());

    if (hasMore && !loading) {
      dispatch(kebabActions.setPage(page + 1));
      dispatch(fetchKebab());
    }
  }
);
