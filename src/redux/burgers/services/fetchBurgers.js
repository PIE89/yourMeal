import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBurgersLimit, getBurgersPage } from "../selectors/burgersSelectors";

export const fetchBurgers = createAsyncThunk(
  "burgers/fetchBurgers",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getBurgersLimit(getState());
    const page = getBurgersPage(getState());

    try {
      const response = await $api.get("/burgers", {
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
