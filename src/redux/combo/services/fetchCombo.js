import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getComboLimit, getComboPage } from "../selectors/comboSelectors";

export const fetchCombo = createAsyncThunk(
  "combo/fetchCombo",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getComboLimit(getState());
    const page = getComboPage(getState());

    try {
      const response = await $api.get(`/combo`, {
        params: {
          _limit: limit,
          _page: page,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        "Извините, ошибка на стороне сервера. Починим в ближайшее время!"
      );
    }
  }
);
