import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSnacksLimit, getSnacksPage } from "../selectors/snacksSelectors";

export const fetchSnacks = createAsyncThunk(
  "snacks/fetchSnacks",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getSnacksLimit(getState());
    const page = getSnacksPage(getState());

    try {
      const response = await $api.get("/snacks", {
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
