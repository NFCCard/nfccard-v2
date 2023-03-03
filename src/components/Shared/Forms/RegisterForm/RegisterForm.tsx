import React, { useRef } from "react";
import { useFormik } from "formik";
import { Register } from "./registerType";
import { registerFormValidation } from "src/validation/registerFormValidation";
import logo from "../../../../../public/static/images/nfc.png";
import Image from "next/image";
import {
    StyledRegisterPageContainer,
    StyledForm,
    StyledFormContainer,
    StyledLabel,
    StyledButton,
    StyledInputWrapper,
    StyledFormWrapper,
    StyledFirstSide,
    StyledSecondSide,
    StyledSidesWrapper,
    StyledHeaderForm,
    StyledLogoWrapper,
    StyledTooltip,
} from "./StyledRegister";
import Input from "@base/Input/Input";
import { ExceptMobile } from "@utils/BreakPoints";
import Container from "@components/Shared/Container/Container";
import { useRegisterMutation } from "@api/auth/authApi";

const RegisterForm = () => {
    const [register, { data }] = useRegisterMutation();
    const initialValue: Register = {
        username: "",
        role: 9865,
        name_fa: "",
        name_en: "",
        phone: "",
        email: "",
        password: "",
        jobTitle: "",
    };

    const handleSubmit = (value: Register) => {
        const formdata = {
            username: value.username,
            role: value.role,
            name_fa: value.name_fa,
            name_en: value.name_en,
            email: value.email,
            phone: value.phone,
            jobTitle: value.jobTitle,
            password: value.password,
        };
        register(formdata);
        console.log(data);
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: registerFormValidation,
        onSubmit: handleSubmit,
    });

    return (
        <StyledRegisterPageContainer>
            <Container>
                <StyledSidesWrapper>
                    <ExceptMobile>
                        <StyledFirstSide>
                            <StyledLogoWrapper>
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={200}
                                    height={200}
                                />
                            </StyledLogoWrapper>
                        </StyledFirstSide>
                    </ExceptMobile>
                    <StyledSecondSide>
                        <StyledFormContainer>
                            <StyledForm onSubmit={formik.handleSubmit}>
                                <StyledHeaderForm>ثبت نام</StyledHeaderForm>
                                <StyledFormWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="username">
                                            <StyledTooltip title="required">
                                                🔻
                                            </StyledTooltip>
                                            نام کاربری
                                        </StyledLabel>
                                        <Input
                                            value={formik.values.username}
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
                                                formik.setTouched({
                                                    username: true,
                                                })
                                            }
                                            error={
                                                formik.errors.username &&
                                                formik.touched.username
                                                    ? formik.errors.username
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="name_fa">
                                            <StyledTooltip title="required">
                                                🔻
                                            </StyledTooltip>
                                            نام و نام خانوادگی فارسی
                                        </StyledLabel>
                                        <Input
                                            value={formik.values.name_fa}
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
                                                formik.setTouched({
                                                    name_fa: true,
                                                })
                                            }
                                            error={
                                                formik.errors.name_fa &&
                                                formik.touched.name_fa
                                                    ? formik.errors.name_fa
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="name_en">
                                            <StyledTooltip title="required">
                                                🔻
                                            </StyledTooltip>
                                            نام و نام خانوادگی انگلیسی
                                        </StyledLabel>
                                        <Input
                                            value={formik.values.name_en}
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
                                                formik.setTouched({
                                                    name_en: true,
                                                })
                                            }
                                            error={
                                                formik.errors.name_en &&
                                                formik.touched.name_en
                                                    ? formik.errors.name_en
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="jobTitle">
                                            شغل
                                        </StyledLabel>
                                        <Input
                                            value={formik.values.jobTitle}
                                            type="text"
                                            id="jobTitle"
                                            name="jobTitle"
                                            onChange={e => {
                                                formik.setValues({
                                                    ...formik.values,
                                                    jobTitle: e.target.value,
                                                });
                                            }}
                                            onFocus={() =>
                                                formik.setTouched({
                                                    jobTitle: true,
                                                })
                                            }
                                            error={
                                                formik.errors.jobTitle &&
                                                formik.touched.jobTitle
                                                    ? formik.errors.jobTitle
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="phone">
                                            <StyledTooltip title="required">
                                                🔻
                                            </StyledTooltip>
                                            شماره همراه
                                        </StyledLabel>
                                        <Input
                                            inputMode="numeric"
                                            maxLength={11}
                                            minLength={11}
                                            value={formik.values.phone}
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
                                                formik.setTouched({
                                                    phone: true,
                                                })
                                            }
                                            error={
                                                formik.errors.phone &&
                                                formik.touched.phone
                                                    ? formik.errors.phone
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="email">
                                            <StyledTooltip title="required">
                                                🔻
                                            </StyledTooltip>
                                            ایمیل
                                        </StyledLabel>
                                        <Input
                                            inputMode="email"
                                            value={formik.values.email}
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
                                                formik.errors.email &&
                                                formik.touched.email
                                                    ? formik.errors.email
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="password">
                                            <StyledTooltip title="required">
                                                🔻
                                            </StyledTooltip>
                                            رمز عبور
                                        </StyledLabel>
                                        <Input
                                            value={formik.values.password}
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
                                                formik.errors.password &&
                                                formik.touched.password
                                                    ? formik.errors.password
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                </StyledFormWrapper>
                                <StyledButton type="submit">
                                    ثبت نام
                                </StyledButton>
                            </StyledForm>
                        </StyledFormContainer>
                    </StyledSecondSide>
                </StyledSidesWrapper>
            </Container>
        </StyledRegisterPageContainer>
    );
};

export default RegisterForm;
