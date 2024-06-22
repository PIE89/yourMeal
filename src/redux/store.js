import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { burgersReducer } from "./burgers/slice/burgersSlice";
import { snacksReducer } from "./snacks/slice/snacksSlice";
import { hotdogsReducer } from "./hot-dogs/slice/hotdogsSlice";
import { comboReducer } from "./combo/slice/comboSlice";
import { kebabReducer } from "./kebab/slice/kebabSlice";
import { pizzaReducer } from "./pizza/slice/pizzaSlice";
import { wokReducer } from "./wok/slice/wokSlice";
import { dessertReducer } from "./dessert/slice/dessertSlice";
import { sauceReducer } from "./sauce/slice/sauceSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { basketReducer } from "./basket/slice/basketSlice";

export const store = configureStore({
  reducer: {
    burgers: burgersReducer,
    snacks: snacksReducer,
    hotdogs: hotdogsReducer,
    combo: comboReducer,
    kebab: kebabReducer,
    pizza: pizzaReducer,
    wok: wokReducer,
    dessert: dessertReducer,
    sauce: sauceReducer,
    product: productReducer,
    basket: basketReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
