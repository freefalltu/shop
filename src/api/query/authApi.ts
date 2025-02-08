import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponse } from "models/LoginResponse";
import { LoginRequest } from "models/LoginRequest";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error?.status === 401 && args.url !== "/login") {
      localStorage.removeItem("accessToken");
    }
    return result;
  },
  endpoints: (build) => ({
    loginUser: build.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", data.accessToken);
          window.location.href = "/";
        } catch (error) {
          console.error("Login Failed:", error);
        }
      },
    }),
    getCurrentUser: build.query<LoginResponse, void>({
      query: () => "auth/me",
    }),
  }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = authApi;
