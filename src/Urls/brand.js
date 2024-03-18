import { request } from "../Utils";

// export const getBrandsByCategory = (payload) =>
//     request({
//         url: "product-brands",
//         params: {
//             ...payload,
//         },
//     });


export const getBrands= (filter) =>
    request({
        url: "product-brands",
        params: {
            ...filter,
        },
    });
