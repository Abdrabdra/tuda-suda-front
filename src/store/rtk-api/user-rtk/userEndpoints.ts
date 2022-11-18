import { IGetOneProfile, IGetProfiles, IProfiles, IRole } from "./user.type";
import userApi from "./userApi";

export const userEndpoints = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getRole: builder.query<IRole[], string>({
      query: () => ({
        url: `/user/check`,
      }),
      providesTags: ["user"],
    }),
    //Profiles
    getProfiles: builder.query<any, object>({
      query: (filters) => ({
        url: `/profile/get-profiles`,
        params: {
          ...filters,
        },
      }),
      providesTags: ["user"],
    }),
    getOneProfile: builder.query<IGetOneProfile, number>({
      query: (userId) => ({
        url: `/profile/user/${userId}`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetOneProfileQuery, useGetRoleQuery, useGetProfilesQuery } =
  userEndpoints;
