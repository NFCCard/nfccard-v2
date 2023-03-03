import * as yup from "yup";

export const loginFormValidation = yup.object({
    email: yup
        .string()
        .email("ایمیل را با فرمت درست وارد کنید")
        .required("وارد کردن ایمیل الزامی است"),
    password: yup.string().required("وارد کردن رمز عبور الزامی است"),
});
