import _ from "lodash";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const formatUrlName = (url) => {
  const removePercentage = url.replace(/%20/g, " ");
  let removeUnderscoreHyphen = removePercentage.replace(/_/g, " ");
  removeUnderscoreHyphen = removeUnderscoreHyphen.replace(/-/g, " ");
  const decoded = decodeURIComponent(
    removeUnderscoreHyphen.replace(/\+/g, " ")
  );
  return _.capitalize(decoded);
};

export function bytesForHuman(sizeBytes) {
  const UNITS = [
    "byte",
    "kilobyte",
    "megabyte",
    "gigabyte",
    "terabyte",
    "petabyte",
  ];
  const BYTES_PER_KB = 1000;
  let size = Math.abs(Number(sizeBytes));

  let u = 0;
  while (size >= BYTES_PER_KB && u < UNITS.length - 1) {
    size /= BYTES_PER_KB;
    ++u;
  }
  return new Intl.NumberFormat([], {
    style: "unit",
    unit: UNITS[u],
    unitDisplay: "short",
    maximumFractionDigits: 1,
  }).format(size);
}

export const formatImage = (url) => {
  const base = BASE_URL.split("/")
    .filter((x) => x)
    .slice(0, 2)
    .join("//");
  return `${base}/${url}`;
};

export const formatAmount = (amount) => {
  if (amount) {
    let amountStr = amount.toString();
    let parts = amountStr.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }
};

export const orderStatusMapping = {
  pending: "Ongoing",
  paid: "Ongoing",
  processed: "Processed",
  shipped: "In transit",
  completed: "Delivered",
  cancelled: "Cancelled",
};

export const formatOrderStatus = (status) => {
  const lowercaseStatus = status?.toLowerCase();
  return orderStatusMapping[lowercaseStatus] || "Ongoing";
};

export const formatCardNumber = (cardNumber) => {
  if (cardNumber) {
    const numericOnly = cardNumber?.replace(/\D/g, "");
    const cardNumberFormat = /(\d{4})(\d{4})(\d{4})(\d{4})/;
    const formattedCardNumber = numericOnly.replace(
      cardNumberFormat,
      "$1 $2 $3 $4"
    );

    return formattedCardNumber;
  }
};

export const formatAddress = (data) => {
  return `${data?.line1}, ${data?.city}, ${data?.state}, ${data?.country}`;
};

export const generateUrlParams = (obj) => {
  let generatedUrl = ``;
  const arrayOfObjectKeys = Object.keys(obj);
  arrayOfObjectKeys.forEach((key) => {
    if (obj[key] || obj[key] === false) {
      generatedUrl += `${key}=${obj[key]}&`;
    }
  });
  return generatedUrl;
};

export const generateQueryKey = (baseKey, searchFilter) => {
  const searchFilterString = JSON.stringify(searchFilter);
  const queryKey = `${baseKey}-${searchFilterString}`;

  return queryKey;
};

export const filterSearchParams = (searchFilter) => {
  const filteredParams = {};

  if (searchFilter) {
    Object.entries(searchFilter).forEach(([key, value]) => {
      if (value !== "" && value !== null) {
        filteredParams[key] = value;
      }
    });
    return filteredParams;
  }
};

export const truncateText = (text, maxLength) =>
  text && text?.length <= maxLength ? text : text?.slice(0, maxLength) + "...";
