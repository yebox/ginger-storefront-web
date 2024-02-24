import axios from "axios";
import Cookies from "js-cookie";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const client = axios.create({
    baseURL: BASE_URL
})

export const request = async (options) => {
    var accessToken = Cookies.get("gingerToken")
    var token = ""

    if (accessToken) {
        token = JSON.parse(accessToken)
    }

    token !== "" &&
        (client.defaults.headers.common['Authorization'] = `Bearer ${token?.token}`)

    const onSuccess = (response) => {
        return response?.data
    }

    const onError = (error) => {
        return Promise.reject(error.response?.data?.message);
    };
    return client(options).then(onSuccess).catch(onError);

}