import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHotdogsLimit, getHotdogsPage } from "../selectors/hotdogsSelectors";

export const fetchHotdogs = createAsyncThunk(
  "hotdogs/fetchHotdogs",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getHotdogsLimit(getState());
    const page = getHotdogsPage(getState());

    try {
      const response = await $api.get("/hotdogs", {
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
