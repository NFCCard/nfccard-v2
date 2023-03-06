/*
 *  create by Amin
 *  date 9/25/2021
 *  axiosBaseQuery
 *  customizing basicQuery for RTKToolkit query with axios
 */

import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import baseApi from "./axiosInstance";
import { RootState } from "src/redux/store";
// import store from "src/redux/store";

const axiosInstance = baseApi._apiCore;

const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: "" }
    ): BaseQueryFn<
        {
            url: string;
            headers?: { "Content-Type"?: string };
            sendAuthorization?: boolean;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
        },
        unknown,
        unknown
    > =>
    async (
        { url, headers = {}, sendAuthorization = true, method, data, params },
        { getState }
    ) => {
        const token = (getState() as RootState).auth.accessToken;
        const auth = sendAuthorization
            ? { Authorization: `Bearer ${token}` }
            : {};
        const result = await axiosInstance({
            url: baseUrl + url,
            method,
            data,
            params,
            headers: {
                ...auth,
                ...headers,
            },
        });
        return { data: result.data };
    };

export default axiosBaseQuery;
