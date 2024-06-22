import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDessertLimit, getDessertPage } from "../selectors/dessertSelectors";

export const fetchDessert = createAsyncThunk(
  "dessert/fetchDessert",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getDessertLimit(getState());
    const page = getDessertPage(getState());

    try {
      const response = await $api.get("/dessert", {
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
