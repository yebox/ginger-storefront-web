import { request } from "../Utils";

export const getWishlist = (userId) =>
    request({
        url: `wishlist/?userId=${userId}`,
        method: 'GET'
    })

export const addToWishlist = (data, userId) =>
    request({
        url: `wishlist?userId=${userId}`,
        method: 'POST',
        data
    })

export const deletItemFromWishlist = (userId, productId, ) =>
    request({
        url: `wishlist/${productId}?userId=${userId}`,
        method: 'DELETE',
    })