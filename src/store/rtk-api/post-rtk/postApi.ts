import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "postApi",
  baseQuery: baseQuery,
  tagTypes: ["post"],
  endpoints: () => ({}),
});
