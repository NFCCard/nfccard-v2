import React from "react";
import {
    StyledForm,
    StyledInput,
    StyledInputLable,
    StyledLoginWrapper,
    StyledSubmitButton,
} from "./StyledLoginData";

const LoginData = () => {
    return (
        <StyledLoginWrapper>
            <StyledForm action="submit">
                <StyledInputLable htmlFor="username">
                    User name :
                </StyledInputLable>
                <StyledInput type="text" id="username" name="username" />
                <StyledInputLable htmlFor="password">
                    Password :
                </StyledInputLable>
                <StyledInput type="password" id="password" name="password" />
                <StyledSubmitButton type="submit">Login</StyledSubmitButton>
            </StyledForm>
        </StyledLoginWrapper>
    );
};

export default LoginData;
