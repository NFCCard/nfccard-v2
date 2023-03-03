import Modal from "@base/Modal/Modal";
import React, { useState } from "react";
import {
    StyledForm,
    StyledInput,
    StyledInputLabel,
    StyledLoginWrapper,
    StyledSubmitButton,
} from "./StyledLogin";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>ثبت نام</button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                animation="fade"
                closeOnBackDropClick
            >
                <StyledLoginWrapper>
                    <StyledForm action="submit">
                        <StyledInputLabel htmlFor="username">
                            : نام کاربری
                        </StyledInputLabel>
                        <StyledInput
                            type="text"
                            id="username"
                            name="username"
                        />
                        <StyledInputLabel htmlFor="password">
                            : رمز عبور
                        </StyledInputLabel>
                        <StyledInput
                            type="password"
                            id="password"
                            name="password"
                        />
                        <StyledSubmitButton type="submit">
                            ورود
                        </StyledSubmitButton>
                    </StyledForm>
                </StyledLoginWrapper>
            </Modal>
        </>
    );
};

export default Login;
