import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzaLimit, getPizzaPage } from "../selectors/pizzaSelectors";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const limit = getPizzaLimit(getState());
    const page = getPizzaPage(getState());

    try {
      const response = await $api.get("/pizza", {
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
