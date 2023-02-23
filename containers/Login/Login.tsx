import LoginData from "@components/Shared/LoginData/LoginData";
import Register from "@components/Shared/Register/Register";
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
