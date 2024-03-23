import { request } from "../Utils";

const BASE_URL = "auth";
export const registerUser = (data) =>
  request({
    url: `${BASE_URL}/email/register`,
    method: "POST",
    data,
  });

export const loginUser = (data) =>
  request({
    url: `${BASE_URL}/email/login`,
    method: "POST",
    data,
  });

export const refresh = (data) =>
  request({
    url: `${BASE_URL}/refresh`,
    method: "POST",
    data,
  });

export const forgotPassword = (data) =>
  request({
    url: `${BASE_URL}/forgot-password`,
    method: "POST",
    data,
  });

export const validateOtp = (data) =>
  request({
    url: `${BASE_URL}/validate-otp`,
    method: "POST",
    data,
  });

export const changePassword = (data) =>
  request({
    url: `${BASE_URL}/change-password`,
    method: "POST",
    data,
  });

export const refreshToken = (data) =>
  request({
    url: `${BASE_URL}/refresh`,
    method: "POST",
    data,
  });
