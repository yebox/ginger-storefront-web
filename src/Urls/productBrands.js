import { request } from "../Utils";

export const getProductBrands = () =>
    request({
        url: 'product-brands',
    })