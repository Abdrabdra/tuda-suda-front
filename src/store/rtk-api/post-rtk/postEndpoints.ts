import { IGetVisit, IHome } from "./post.type";
import postApi from "./postApi";

export const postEndpoints = postApi.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query<IHome, string>({
      query: () => ({
        url: `/profile/statistic`,
      }),
      providesTags: ["post"],
    }),
  }),
});

export const { useGetHomeQuery } = postEndpoints;
