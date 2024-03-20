import { request } from "../Utils";


export const makePayment = (data) =>
    request({
        url: `payments`,
        method: "POST",
        data
    });


export const verifyPayments = (filter) =>
    request({
        url: `payments/verify`,
        method: "GET",
        params: {
            ...filter
        }
    });
