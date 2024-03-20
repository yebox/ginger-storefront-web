import { request } from "../Utils"

export const getShoppingConfig = (sellerId) =>
    request({
        url: `shopping-config`,
        method: 'GET',
        params: {
            sellerId
        }
    })

export const getShoppingConfigDiscount = (filter) =>
    request({
        url: `shopping-config`,
        method: 'GET',
        params: {
            ...filter
        }
    })