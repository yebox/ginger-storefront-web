import { request } from "../Utils";

export const getCategories = (param) =>
    request({
        url: 'products-categories?',
        method: 'GET'
})