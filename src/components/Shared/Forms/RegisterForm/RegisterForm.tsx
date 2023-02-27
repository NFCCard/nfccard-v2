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
} from "./StyledRegister";
import Input from "@base/Input/Input";
import { ExceptMobile } from "@utils/BreakPoints";
import Container from "@components/Shared/Container/Container";

const RegisterForm = () => {
    const initialValue: Register = {
        username: "",
        role: 9865,
        name_fa: "",
        name_en: "",
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
                                        <StyledLabel htmlFor="job">
                                            شغل
                                        </StyledLabel>
                                        <Input
                                            value={formik.values.job}
                                            type="text"
                                            id="job"
                                            name="job"
                                            onChange={e => {
                                                formik.setValues({
                                                    ...formik.values,
                                                    job: e.target.value,
                                                });
                                            }}
                                            onFocus={() =>
                                                formik.setTouched({ job: true })
                                            }
                                            error={
                                                formik.errors.job &&
                                                formik.touched.job
                                                    ? formik.errors.job
                                                    : ""
                                            }
                                        />
                                    </StyledInputWrapper>
                                    <StyledInputWrapper>
                                        <StyledLabel htmlFor="phone">
                                            شماره همراه
                                        </StyledLabel>
                                        <Input
                                            inputMode="numeric"
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
