import { IPost, IPostResponse } from "./post.type";
import postApi from "./postApi";

export const postEndpoints = postApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPostResponse, object>({
      query: (filters) => ({
        url: `/posts`,
        params: { ...filters },
      }),
      providesTags: ["post"],
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (body) => ({
        url: `/posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postEndpoints;
