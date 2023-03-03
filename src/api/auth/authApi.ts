import axiosBaseQuery from "@api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { registerReqBody, registerResponse } from "./authApiTypes";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "auth",
    }),
    tagTypes: ["authApi"],
    endpoints: builder => ({
        register: builder.mutation<registerResponse, registerReqBody>({
            query: data => ({
                url: "/register",
                method: "POST",
                sendAuthorization: false,
                data: data,
            }),
        }),
    }),
});

export const { useRegisterMutation } = authApi;
