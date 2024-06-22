import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getComboHasMore,
  getComboLoading,
  getComboPage,
} from "../selectors/comboSelectors";
import { fetchCombo } from "./fetchCombo";
import { comboActions } from "../slice/comboSlice";

export const fetchNextComboPage = createAsyncThunk(
  "combo/fetchNextComboPage",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const page = getComboPage(getState());
    const hasMore = getComboHasMore(getState());
    const loading = getComboLoading(getState());

    if (hasMore && !loading) {
      dispatch(comboActions.setPage(page + 1));
      dispatch(fetchCombo());
    }
  }
);
