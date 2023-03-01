import axiosBaseQuery from "@api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/dist/query";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "auth",
    }),
    tagTypes: ["authApi"],
    endpoints:
});
