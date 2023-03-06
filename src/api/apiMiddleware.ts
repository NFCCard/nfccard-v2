import { authApi } from "./auth/authApi";
export const apiMiddleware = [authApi.middleware];
