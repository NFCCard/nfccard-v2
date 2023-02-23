import React from "react";
import {
    StyledForm,
    StyledInput,
    StyledInputLabel,
    StyledLoginWrapper,
    StyledSubmitButton,
} from "./StyledLogin";

const Login = () => {
    return (
        <StyledLoginWrapper>
            <StyledForm action="submit">
                <StyledInputLabel htmlFor="username">
                    User name :
                </StyledInputLabel>
                <StyledInput type="text" id="username" name="username" />
                <StyledInputLabel htmlFor="password">
                    Password :
                </StyledInputLabel>
                <StyledInput type="password" id="password" name="password" />
                <StyledSubmitButton type="submit">Login</StyledSubmitButton>
            </StyledForm>
        </StyledLoginWrapper>
    );
};

export default Login;
