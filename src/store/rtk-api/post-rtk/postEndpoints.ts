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
    getOnePosts: builder.query<any, string>({
      query: (id) => ({
        url: `/posts/${id}`,
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
    approvePost: builder.mutation<any, any>({
      query: (id) => ({
        url: `/posts/approve/${id}`,
        method: "POST",
        params: { approved: true },
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetOnePostsQuery,
  useCreatePostMutation,
  useApprovePostMutation,
} = postEndpoints;
