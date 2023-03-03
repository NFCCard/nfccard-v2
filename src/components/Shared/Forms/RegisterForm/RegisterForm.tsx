import React from "react";
import { useFormik } from "formik";
import {
    StyledRegisterPageContainer,
    StyledForm,
    StyledFormContainer,
    StyledLabel,
    StyledInput,
    StyledButton,
} from "./StyledRegister";
import { Register } from "./registerType";
// import { registerFormValidation } from "src/validation/RegisterFormValidation";

const RegisterForm = () => {
    const initialValue: Register = {
        username: "",
        role: 9865,
        name_fa: "",
        name_en: "",
        des_fa: "",
        des_en: "",
        phone: "",
        email: "",
        password: "",
        job: "",
    };

    const handleSubmit = (value: Register) => {
        console.log(value);
    };

    const formik = useFormik({
        initialValues: initialValue,
        onSubmit: handleSubmit,
    });

    return (
        <StyledRegisterPageContainer>
            <StyledFormContainer>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <StyledLabel htmlFor="username">نام کاربری</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="name_fa">
                        نام و نام خانوادگی فارسی
                    </StyledLabel>
                    <StyledInput type="text" id="name_fa" name="name_fa" />
                    <StyledLabel htmlFor="name_en">
                        نام و نام خانوادگی انگلیسی
                    </StyledLabel>
                    <StyledInput type="text" id="name_en" name="name_en" />
                    <StyledLabel htmlFor="des_fa">توضیحات فارسی</StyledLabel>
                    <StyledInput type="text" id="des_fa" name="des_fa" />
                    <StyledLabel htmlFor="des_en">توضیحات انگلیسی</StyledLabel>
                    <StyledInput type="text" id="des_en" name="des_en" />
                    <StyledLabel htmlFor="phone">شماره همراه</StyledLabel>
                    <StyledInput type="text" id="phone" name="phone" />
                    <StyledLabel htmlFor="email">ایمیل</StyledLabel>
                    <StyledInput type="text" id="email" name="email" />
                    <StyledLabel htmlFor="password">رمز عبور</StyledLabel>
                    <StyledInput type="text" id="password" name="password" />
                    <StyledLabel htmlFor="job">شغل</StyledLabel>
                    <StyledInput type="text" id="job" name="job" />
                    <StyledButton type="submit">ثبت نام</StyledButton>
                </StyledForm>
            </StyledFormContainer>
        </StyledRegisterPageContainer>
    );
};

export default RegisterForm;
