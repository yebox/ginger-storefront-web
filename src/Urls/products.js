import { request } from "../Utils";

export const getProducts = () =>
    request({
        url: 'products',
    })