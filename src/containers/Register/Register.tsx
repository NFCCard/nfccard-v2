import RegisterForm from "@components/Shared/Forms/Register/Register";
import React from "react";
import { StyledRegisterPageContainer } from "./StyleRegister";

const Register = () => {
    return (
        <StyledRegisterPageContainer>
            <RegisterForm />
        </StyledRegisterPageContainer>
    );
};

export default Register;
