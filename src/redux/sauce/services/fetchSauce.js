import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSauceLimit, getSaucePage } from "../selectors/sauceSelectors";

export const fetchSauce = createAsyncThunk(
  "sauce/fetchSauce",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getSauceLimit(getState());
    const page = getSaucePage(getState());

    try {
      const response = await $api.get("/sauce", {
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
