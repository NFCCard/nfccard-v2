import axiosBaseQuery from "@api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
    loginReqBody,
    loginResponse,
    registerReqBody,
    registerResponse,
} from "./authApiTypes";

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
        login: builder.mutation<loginResponse, loginReqBody>({
            query: data => ({
                url: "/login",
                method: "POST",
                sendAuthorization: false,
                data: data,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
