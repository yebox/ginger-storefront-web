import * as yup from "yup";

export const PersonalInformationSchema = yup.object().shape({
  phoneNumber: yup.string().required("please input your phone number"),
  fullName: yup.string().required("please input your full name"),
  email: yup.string().required("please input your email"),
  country: yup.mixed().required("please select a country"),
});

export const BusinessInformationSchema = yup.object().shape({
  businessType: yup.string().required("please input your business type"),
  businessName: yup.string().required("please input your business name"),
  website: yup.string().required("please input your website"),
  businessDate: yup.string().required("please input business date"),
});

export const AddressSchema = yup.object().shape({
  address: yup.string().required("please input your address"),
  apartment: yup.string(),
  city: yup.string().required("please input your city"),
  state: yup.string().required("please input your state"),
  country: yup.mixed().required("please select a country"),
  zipCode: yup.string().required("please input your zip code"),
  // phoneNumber: yup.string().required("please input your phone number"),
});
