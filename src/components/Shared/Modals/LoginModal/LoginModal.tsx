import Modal from "@base/Modal/Modal";
import Login from "@components/Shared/Forms/Login/Login";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { openLoginModal } from "@redux/slices/modals/modalsSlice";
import React from "react";

const LoginModal = () => {
    const { login } = useAppSelector(state => state.modals);
    const dispatch = useAppDispatch();

    return (
        <Modal
            isOpen={login}
            onClose={() => dispatch(openLoginModal(false))}
            closeOnBackDropClick
            animation="fade"
            header={<></>}
        >
            <Login />
        </Modal>
    );
};

export default LoginModal;
