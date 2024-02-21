import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string(),
  otp: yup.string(),
  password: yup.string().min(12, "Password must be at least 12 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Your passwords do not match"),
});
