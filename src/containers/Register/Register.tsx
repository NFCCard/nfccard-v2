import RegisterForm from "@components/Shared/Forms/RegisterForm/RegisterForm";
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
