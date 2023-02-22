import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/types/types";

interface AuthState {
    user: User | null;
    accessToken: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        updateAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
        updateUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
    },
});

export const { updateAccessToken, updateUser } = authSlice.actions;

export default authSlice.reducer;
