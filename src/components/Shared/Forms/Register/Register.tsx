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
import { register } from "@type/types";
// import { registerFormValidation } from "src/validation/RegisterFormValidation";

const Register = () => {
    const socialMedias = [
        {
            icon: "fab fa-telegram",
            background: "#0088CC",
            overlay: "#0088CC5d",
            name: "telegram",
            link: "",
            // state: inputState.telegram,
        },
        {
            icon: "fab fa-instagram",
            background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            overlay:
                "radial-gradient(circle at 30% 107%, #fdf4975d 0%, #fdf4975d 5%, #fd59495d 45%,#d6249f5d 60%,#285AEB5d 90%)",
            name: "instagram",
            link: "",
            // // state: inputState.instagram,
        },
        {
            icon: "fab fa-whatsapp",
            background: "#4FCE5d",
            overlay: "#4FCE",
            name: "whatsapp",
            link: "",
            // // state: inputState.whatsapp,
        },
        {
            icon: "fab fa-linkedin",
            background: "#006192",
            overlay: "#0061925d",
            name: "linkedin",
            link: "",
            // // state: inputState.linkedin,
        },
        {
            icon: "fab fa-dribbble",
            background: "#E94C88",
            overlay: "#E94C885d",
            name: "dribbble",
            link: "",
            // // state: inputState.dribbble,
        },
        {
            icon: "fab fa-pinterest",
            background: "#F0002A",
            overlay: "#F0002A5d",
            name: "pinterest",
            link: "",
            // // state: inputState.pinterest,
        },
        {
            icon: "fab fa-twitter",
            background: "#1DA1F2",
            overlay: "#1DA1F25d",
            name: "twitter",
            link: "",
            // // state: inputState.twitter,
        },
        {
            icon: "fab fa-youtube",
            background: "#FF0000",
            overlay: "#FF00005d",
            name: "youtube",
            link: "",
            // // state: inputState.youtube,
        },
        {
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68.33 68.33"
                    width={27}
                    height={34}
                >
                    <defs>
                        <style></style>
                    </defs>
                    <title>icon--color-black</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="brand">
                            <g id="icon--color-black">
                                <path
                                    className="cls-1"
                                    d="M29.49,2,23.2.36A10.58,10.58,0,0,0,10.25,7.87L8.68,13.8A32.4,32.4,0,0,1,29.49,2Z"
                                    fill="#231f20"
                                />
                                <path
                                    className="cls-1"
                                    d="M1.9,39.33.36,45.14A10.58,10.58,0,0,0,7.87,58.08l6,1.6A32.41,32.41,0,0,1,1.9,39.33Z"
                                    fill="#231f20"
                                />
                                <path
                                    className="cls-1"
                                    d="M60.46,10.25,53.73,8.46a32.4,32.4,0,0,1,12.4,21.7l1.85-7A10.58,10.58,0,0,0,60.46,10.25Z"
                                    fill="#231f20"
                                />
                                <path
                                    className="cls-1"
                                    d="M38.69,66.26,45.14,68a10.58,10.58,0,0,0,12.94-7.51l1.82-6.84A32.42,32.42,0,0,1,38.69,66.26Z"
                                    fill="#231f20"
                                />
                                <path
                                    className="cls-2"
                                    d="M34.17,4.54A29.63,29.63,0,1,0,63.79,34.17,29.63,29.63,0,0,0,34.17,4.54ZM17.39,19.32a8.46,8.46,0,1,1,6.71,9.91A8.46,8.46,0,0,1,17.39,19.32ZM29.7,44.92A8.46,8.46,0,1,1,23,35,8.46,8.46,0,0,1,29.7,44.92Zm3.59-6.85a3.76,3.76,0,1,1,4.41-3A3.76,3.76,0,0,1,33.29,38.07ZM50.94,49a8.46,8.46,0,1,1-6.71-9.91A8.46,8.46,0,0,1,50.94,49Zm-5.6-15.68a8.46,8.46,0,1,1,9.91-6.71A8.46,8.46,0,0,1,45.34,33.33Z"
                                    fill="#ed145b"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            ),
            svgOverlay: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68.33 68.33"
                    width={27}
                    height={34}
                >
                    <defs>
                        <style></style>
                    </defs>
                    <title>icon--color-black</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="brand">
                            <g id="icon--color-black">
                                <path
                                    className="cls-1"
                                    d="M29.49,2,23.2.36A10.58,10.58,0,0,0,10.25,7.87L8.68,13.8A32.4,32.4,0,0,1,29.49,2Z"
                                    fill="#231f205d"
                                />
                                <path
                                    className="cls-1"
                                    d="M1.9,39.33.36,45.14A10.58,10.58,0,0,0,7.87,58.08l6,1.6A32.41,32.41,0,0,1,1.9,39.33Z"
                                    fill="#231f205d"
                                />
                                <path
                                    className="cls-1"
                                    d="M60.46,10.25,53.73,8.46a32.4,32.4,0,0,1,12.4,21.7l1.85-7A10.58,10.58,0,0,0,60.46,10.25Z"
                                    fill="#231f205d"
                                />
                                <path
                                    className="cls-1"
                                    d="M38.69,66.26,45.14,68a10.58,10.58,0,0,0,12.94-7.51l1.82-6.84A32.42,32.42,0,0,1,38.69,66.26Z"
                                    fill="#231f205d"
                                />
                                <path
                                    className="cls-2"
                                    d="M34.17,4.54A29.63,29.63,0,1,0,63.79,34.17,29.63,29.63,0,0,0,34.17,4.54ZM17.39,19.32a8.46,8.46,0,1,1,6.71,9.91A8.46,8.46,0,0,1,17.39,19.32ZM29.7,44.92A8.46,8.46,0,1,1,23,35,8.46,8.46,0,0,1,29.7,44.92Zm3.59-6.85a3.76,3.76,0,1,1,4.41-3A3.76,3.76,0,0,1,33.29,38.07ZM50.94,49a8.46,8.46,0,1,1-6.71-9.91A8.46,8.46,0,0,1,50.94,49Zm-5.6-15.68a8.46,8.46,0,1,1,9.91-6.71A8.46,8.46,0,0,1,45.34,33.33Z"
                                    fill="#ed145b5d"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            ),
            icon: "",
            background: "#c6c6c6",
            overlay: "#c6c6c6d",
            name: "aparat",
            link: "",
            // // state: inputState.aparat,
        },
        {
            icon: "fab fa-tiktok",
            background: "#69C9D0",
            overlay: "#69C9D05d",
            name: "tiktok",
            link: "",
            // // state: inputState.tiktok,
        },
        {
            icon: "fab fa-spotify",
            background: "#1ED761",
            overlay: "#1ED7615d",
            name: "spotify",
            link: "",
            // // state: inputState.spotify,
        },
        {
            icon: "fab fa-soundcloud",
            background:
                "-webkit-linear-gradient(15deg , #FF9533 ,  #FF7F34 , #FE6D35 , #FF5836 ,  #FF4137)",
            overlay:
                "-webkit-linear-gradient(15deg , #FF95335d ,  #FF7F345d , #FE6D355d , #FF58365d ,  #FF41375d)",
            name: "soundcloud",
            link: "",
            // // state: inputState.soundcloud,
        },
        {
            icon: "fab fa-twitch",
            background: "#6441A4",
            overlay: "#6441A45d",
            name: "twitch",
            link: "",
            // // state: inputState.twitch,
        },
        {
            icon: "fab fa-github",
            background: "#4183C4",
            overlay: "#4183C45d",
            name: "github",
            link: "",
            // // state: inputState.github,
        },
        {
            icon: "far fa-globe",
            background: "#999999",
            overlay: "#9999995d",
            name: "website",
            link: "",
            // // state: inputState.website,
        },
    ];

    const initialValues: register = {
        username: "",
        name_fa: "string",
        name_en: "string",
        description_fa: "string",
        description_en: "string",
        phone: "",
        email: "string",
        password: "string",
        role: 9865,
        jobTitle: "string",
        avatar: "",
        socials: "",
        resume: "",
    };

    const handleSubmit = (values: any) => {
        let socialMediaList = [];
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
        // validationSchema: registerFormValidation,
    });

    return (
        <StyledRegisterPageContainer>
            <StyledFormContainer>
                <StyledForm onSubmit={formik.handleSubmit}>
                    <StyledLabel htmlFor="username">نام کاربری</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">
                        نام و نام خانوادگی فارسی
                    </StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">
                        نام و نام خانوادگی انگلیسی
                    </StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">توضیحات فارسی</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">
                        توضیحات انگلیسی
                    </StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">شماره همراه</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">ایمیل</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">رمز عبور</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledLabel htmlFor="username">شغل</StyledLabel>
                    <StyledInput type="text" id="username" name="username" />
                    <StyledButton type="submit">ثبت نام</StyledButton>
                </StyledForm>
            </StyledFormContainer>
        </StyledRegisterPageContainer>
    );
};

export default Register;
