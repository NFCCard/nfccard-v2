import { authApi } from "../api/auth/authApi";

export const apiReducers = {
    [authApi.reducerPath]: authApi.reducer,
    // [updateUserInfoAPI.reducerPath]: updateUserInfoAPI.reducer,
};
