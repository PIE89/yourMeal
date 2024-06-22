import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
  endpoints: (builder) => ({
    getBurgers: builder.query({
      query: () => ({
        url: "/burgers",
        params: {
          _limit: 4,
        },
      }),
    }),
  }),
});

export const useGetBurgers = rtkApi.useGetBurgersQuery;
