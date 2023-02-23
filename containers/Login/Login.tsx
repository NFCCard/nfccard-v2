import LoginData from "@components/Shared/Forms/Login/Login";
import Register from "@components/Shared/Forms/Register/Register";
import React from "react";
import { StyledLoginPageContainer } from "./StyleLogin";

const Login = () => {
    return (
        <StyledLoginPageContainer>
            <LoginData />
            <Register />
        </StyledLoginPageContainer>
    );
};

export default Login;
