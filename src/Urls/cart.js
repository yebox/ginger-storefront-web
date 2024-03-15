import { request } from "../Utils";

export const addToCart = (data, userId) =>
    request({
        url: `cart?${userId}`,
        method: 'POST',
        data
    })

export const getCartItems = (userId) =>
    request({
        url: `cart?${userId}`,
        method: 'GET',
    })

export const removeAllCartItem = (userId) =>
    request({
        url: `cart?${userId}`,
        method: 'DELETE',
    })

export const removeCartItem = (productId, quantity) =>
    request({
        url: `cart/${productId}?quantity=${quantity}`,
        method: 'DELETE',
    })

