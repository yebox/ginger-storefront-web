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

export const CardDetailsSchema = yup.object().shape({
    cardNumber: yup
      .string()
      .matches(/^\d{16}$/, 'Must be a valid 16-digit card number')
      .required('Card number is required'),
    name: yup.string().required('Name on card is required'),
    expireryDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Must be in the format MM/YY')
      .required('Expiration date is required'),
    securityCode: yup
      .string()
      .matches(/^\d{3,4}$/, 'Must be a valid 3 or 4-digit security code')
      .required('Security code is required'),
  });