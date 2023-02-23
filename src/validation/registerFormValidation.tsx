import * as yup from "yup";

export const registerFormValidation = yup.object({
    username: yup.string().required("وارد کردن نام کاربری الزامی است"),
    name_fa: yup.string().required("وارد کردن نام به فارسی الزامی است"),
    name_en: yup.string().required("وارد کردن نام به انگلیسی الزامی است"),
    phone: yup.number().required("وارد کردن شماره تلفن الزامی است"),
    email: yup.string().required("وارد کردن ایمیل الزامی است"),
    password: yup.string().required("وارد کردن شماره تلفن الزامی است"),
});
