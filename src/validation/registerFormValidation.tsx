import * as yup from "yup";

const phoneRegExp = /^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/;

export const registerFormValidation = yup.object({
    username: yup.string().required("وارد کردن نام کاربری الزامی است"),
    name_fa: yup.string().required("وارد کردن نام به فارسی الزامی است"),
    name_en: yup.string().required("وارد کردن نام به انگلیسی الزامی است"),
    phone: yup
        .string()
        .matches(phoneRegExp, "شماره تلفن اشتباه وارد شده است")
        .required("وارد کردن شماره تلفن الزامی است"),
    email: yup
        .string()
        .email("ایمیل را با فرمت درست وارد کنید")
        .required("وارد کردن ایمیل الزامی است"),
    password: yup.string().required("وارد کردن رمز عبور الزامی است"),
});
