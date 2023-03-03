import Input from "@base/Input/Input";
import { useFormik } from "formik";
import React from "react";
import { loginFormValidation } from "src/validation/loginFormValidation";
import { LoginType } from "./loginTypes";
import {
    StyledForm,
    StyledInputLabel,
    StyledInputWrapper,
    StyledLoginWrapper,
    StyledSubmitButton,
    StyledTag,
} from "./StyledLogin";

const Login = () => {
    const initialValue: LoginType = {
        email: "",
        password: "",
    };

    const handleSubmit = (value: LoginType) => {
        const formdata = {
            email: value.email,
            password: value.password,
        };
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: loginFormValidation,
        onSubmit: handleSubmit,
    });

    return (
        <StyledLoginWrapper>
            <StyledTag>NFC</StyledTag>
            <StyledForm action="submit">
                <StyledInputWrapper>
                    <StyledInputLabel htmlFor="email">: ایمیل</StyledInputLabel>
                    <Input
                        value={formik.values.email}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        type="text"
                        id="email"
                        name="email"
                        onChange={e => {
                            formik.setValues({
                                ...formik.values,
                                email: e.target.value,
                            });
                        }}
                        onFocus={() =>
                            formik.setTouched({
                                email: true,
                            })
                        }
                        error={
                            formik.errors.email && formik.touched.email
                                ? formik.errors.email
                                : ""
                        }
                    />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <StyledInputLabel htmlFor="password">
                        : رمز عبور
                    </StyledInputLabel>
                    <Input
                        value={formik.values.password}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        type="password"
                        id="password"
                        name="password"
                        onChange={e => {
                            formik.setValues({
                                ...formik.values,
                                password: e.target.value,
                            });
                        }}
                        onFocus={() =>
                            formik.setTouched({
                                password: true,
                            })
                        }
                        error={
                            formik.errors.password && formik.touched.password
                                ? formik.errors.password
                                : ""
                        }
                    />
                </StyledInputWrapper>
                <StyledSubmitButton type="submit">
                    ورود به حساب کاربری
                </StyledSubmitButton>
            </StyledForm>
        </StyledLoginWrapper>
    );
};

export default Login;
