import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required("please input your first name"),
  lastName: yup.string().required("please input your last name"),
  email: yup.string().required("please input your email"),
  phoneNumber: yup.string().required("please input your phone number"),
  country: yup.mixed().required("please select a country"),
  password: yup
    .string()
    .required("please input your password")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
      "Password must contain at least one number, one lowercase letter, one special character, and be at least 6 characters long"
    ),
});
