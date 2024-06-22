import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (params, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const { id, product } = params;

    try {
      const response = await $api.get(`/${product}/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        "Извините, ошибка на стороне сервера. Починим в ближайшее время!"
      );
    }
  }
);
