import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../../utils/BaseURL";

export const Todos = createApi({
  reducerPath: "Todos",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseURL}/` }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "todos"
    })
  })
});


export const { useGetAllTodosQuery } = Todos;
