import * as yup from "yup";

export const CheckoutAddressSchema = yup.object().shape({
    address: yup.string().required("please input your address"),
    apartment: yup.string(),
    city: yup.string().required("please input your city"),
    state: yup.string().required("please input your state"),
    country: yup.mixed().required("please select a country"),
    zipCode: yup.string().required("please input your zip code"),
    // phoneNumber: yup.string().required("please input your phone number"),
});
