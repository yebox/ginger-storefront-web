import * as yup from "yup";

export const SupportSchema = yup.object().shape({
  fullName: yup.string().required("please input your full name"),
  email: yup.string().required("please input your email"),
  note: yup.string().required("please input your note"),
});
