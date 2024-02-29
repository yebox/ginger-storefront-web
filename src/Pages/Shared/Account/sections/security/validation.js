import * as yup from "yup";

export const ChangePasswordSchema = yup.object().shape({
  oldPassword: yup.string().min(12, "Password must be at least 12 characters"),
  newPassword: yup.string().min(12, "Password must be at least 12 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Your passwords do not match"),
});
