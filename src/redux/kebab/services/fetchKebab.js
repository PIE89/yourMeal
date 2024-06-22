import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getKebabLimit, getKebabPage } from "../selectors/kebabSelectors";

export const fetchKebab = createAsyncThunk(
  "kebab/fetchKebab",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getKebabLimit(getState());
    const page = getKebabPage(getState());

    try {
      const response = await $api.get("/kebab", {
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
