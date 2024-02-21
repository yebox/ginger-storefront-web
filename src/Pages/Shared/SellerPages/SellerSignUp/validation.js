import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required("please input your first name"),
  lastName: yup.string().required("please input your last name"),
  email: yup.string().required("please input your email"),
  country: yup.mixed().required("please select a country"),
  password: yup
    .string()
    .required("please input your password")
    .min(12, "Password must be at least 12 characters"),
});
