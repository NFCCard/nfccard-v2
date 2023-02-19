import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type Modals = {
    login: boolean;
};

const initialState: Modals = {
    login: false,
};

const modalsSlice = createSlice({
    name: "modals",
    initialState: initialState,
    reducers: {
        openLoginModal(state, action: PayloadAction<boolean>) {
            state.login = action.payload;
        },
    },
});

export const { openLoginModal } = modalsSlice.actions;
export const selectModal = (state: RootState) => state.modals;

export default modalsSlice.reducer;
