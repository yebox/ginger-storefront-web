import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("please input your email"),
  password: yup.string().required("please input your password"),
});
