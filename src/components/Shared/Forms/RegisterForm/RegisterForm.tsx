import React from "react";
import { useFormik } from "formik";
import {
    StyledRegisterPageContainer,
    StyledForm,
    StyledFormContainer,
    StyledLabel,
    StyledInput,
    StyledButton,
    StyledInputError,
    StyledInputWrapper,
    StyledFormWrapper,
    StyledFirstSide,
} from "./StyledRegister";
import { Register } from "./registerType";
import { registerFormValidation } from "src/validation/registerFormValidation";
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
        validationSchema: registerFormValidation,
        onSubmit: handleSubmit,
    });

    return (
        <StyledRegisterPageContainer>
            <StyledFormContainer>
                <StyledFirstSide></StyledFirstSide>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <StyledFormWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="username">
                                نام کاربری
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                id="username"
                                name="username"
                                onChange={e => {
                                    formik.setValues({
                                        ...formik.values,
                                        username: e.target.value,
                                    });
                                }}
                                onFocus={() =>
                                    formik.setTouched({ username: true })
                                }
                            />
                            {formik.errors.username &&
                                formik.touched.username && (
                                    <StyledInputError>
                                        {formik.errors.username}
                                    </StyledInputError>
                                )}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="name_fa">
                                نام و نام خانوادگی فارسی
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                id="name_fa"
                                name="name_fa"
                                onChange={e => {
                                    formik.setValues({
                                        ...formik.values,
                                        name_fa: e.target.value,
                                    });
                                }}
                                onFocus={() =>
                                    formik.setTouched({ name_fa: true })
                                }
                            />
                            {formik.errors.name_fa &&
                                formik.touched.name_fa && (
                                    <StyledInputError>
                                        {formik.errors.name_fa}
                                    </StyledInputError>
                                )}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="name_en">
                                نام و نام خانوادگی انگلیسی
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                id="name_en"
                                name="name_en"
                                onChange={e => {
                                    formik.setValues({
                                        ...formik.values,
                                        name_en: e.target.value,
                                    });
                                }}
                                onFocus={() =>
                                    formik.setTouched({ name_en: true })
                                }
                            />
                            {formik.errors.name_en &&
                                formik.touched.name_en && (
                                    <StyledInputError>
                                        {formik.errors.name_en}
                                    </StyledInputError>
                                )}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="job">شغل</StyledLabel>
                            <StyledInput
                                type="text"
                                id="job"
                                name="job"
                                onChange={e => {
                                    formik.setValues({
                                        ...formik.values,
                                        job: e.target.value,
                                    });
                                }}
                                onFocus={() => formik.setTouched({ job: true })}
                            />
                            {formik.errors.job && formik.touched.job && (
                                <StyledInputError>
                                    {formik.errors.job}
                                </StyledInputError>
                            )}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="phone">
                                شماره همراه
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                id="phone"
                                name="phone"
                                onChange={e => {
                                    formik.setValues({
                                        ...formik.values,
                                        phone: e.target.value,
                                    });
                                }}
                                onFocus={() =>
                                    formik.setTouched({ phone: true })
                                }
                            />
                            {formik.errors.phone && formik.touched.phone && (
                                <StyledInputError>
                                    {formik.errors.phone}
                                </StyledInputError>
                            )}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="email">ایمیل</StyledLabel>
                            <StyledInput
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
                                    formik.setTouched({ email: true })
                                }
                            />
                            {formik.errors.email && formik.touched.email && (
                                <StyledInputError>
                                    {formik.errors.email}
                                </StyledInputError>
                            )}
                        </StyledInputWrapper>
                        <StyledInputWrapper>
                            <StyledLabel htmlFor="password">
                                رمز عبور
                            </StyledLabel>
                            <StyledInput
                                type="text"
                                id="password"
                                name="password"
                                onChange={e => {
                                    formik.setValues({
                                        ...formik.values,
                                        password: e.target.value,
                                    });
                                }}
                                onFocus={() =>
                                    formik.setTouched({ password: true })
                                }
                            />
                            {formik.errors.password &&
                                formik.touched.password && (
                                    <StyledInputError>
                                        {formik.errors.password}
                                    </StyledInputError>
                                )}
                        </StyledInputWrapper>
                    </StyledFormWrapper>
                    <StyledButton type="submit">ثبت نام</StyledButton>
                </StyledForm>
            </StyledFormContainer>
        </StyledRegisterPageContainer>
    );
};

export default RegisterForm;
