import axiosBaseQuery from "@api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/dist/query";
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
                url: "/login",
                method: "POST",
                sendAuthorization: false,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                data: data,
            }),
        }),
    }),
});

export const {} = authApi;
