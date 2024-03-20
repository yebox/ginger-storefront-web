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
  processing: "Ongoing",
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
      if (value !== '' && value !== null) {
        filteredParams[key] = value;
      }
    });
    return filteredParams;
  }

};


export const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};


export const amountToWords = (amount) => {

  const singleDigits = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teenDigits = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tensDigits = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const suffixes = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

  function convertThreeDigits(num) {
    let words = '';
    if (num >= 100) {
      words += singleDigits[Math.floor(num / 100)] + ' Hundred ';
      num %= 100;
    }
    if (num >= 10 && num <= 19) {
      words += teenDigits[num - 10] + ' ';
    } else if (num >= 20) {
      words += tensDigits[Math.floor(num / 10)] + ' ';
      num %= 10;
    }
    if (num > 0) {
      words += singleDigits[num] + ' ';
    }
    return words;
  }

  // Function to convert the amount to words
  function convert(amount) {
    if (amount === 0) return 'Zero';

    let words = '';
    let index = 0;

    do {
      const chunk = amount % 1000;
      if (chunk !== 0) {
        words = convertThreeDigits(chunk) + suffixes[index] + ' ' + words;
      }
      index++;
      amount = Math.floor(amount / 1000);
    } while (amount > 0);

    return words.trim();
  }

  return convert(amount);
}