import { request } from "../Utils";

export const getCategories = (filter) =>
    request({
        url: `product-categories`,
        method: 'GET',
        params: {
            ...filter
        }
    })