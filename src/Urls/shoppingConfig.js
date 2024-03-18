import { request } from "../Utils"

export const getShoppingConfig = (sellerId) =>
    request({
        url: `shopping-config`,
        method: 'GET',
        params: {
            sellerId
        }
    })