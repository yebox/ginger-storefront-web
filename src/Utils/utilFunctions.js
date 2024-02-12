import _ from "lodash"

export const formatUrlName = (url) => {
    const removePercentage = url.replace(/%20/g, " ");
    let removeUnderscoreHyphen = removePercentage.replace(/_/g, " ");
    removeUnderscoreHyphen = removeUnderscoreHyphen.replace(/-/g, " ");
    const decoded = decodeURIComponent(
      removeUnderscoreHyphen.replace(/\+/g, " ")
    );
    return _.capitalize(decoded);
  };
  