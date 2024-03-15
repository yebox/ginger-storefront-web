import { request } from "../Utils";

export const updateUser = (data) =>
    request({
        url: `users`,
        method: 'PUT',
        data
    })

export const updateUserAddress = (data) =>
    request({
        url: `users/address`,
        method: 'PUT',
        data
    })

export const getUser = (data) =>
    request({
        url: `users`,
        method: 'GET',
        data
    })