import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWokLimit, getWokPage } from "../selectors/wokSelectors";

export const fetchWok = createAsyncThunk(
  "wok/fetchWok",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getWokLimit(getState());
    const page = getWokPage(getState());

    try {
      const response = await $api.get("/wok", {
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
