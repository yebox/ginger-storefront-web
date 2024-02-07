const sizes = {
    mobileXS:'290px',
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '970px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

const heights = {
    nesthub: '600px',
    nesthubMax:'800px'
}
  
export const devices = {
    nesthub: `(max-height: ${heights.nesthub})`,
    nesthubMax: `(max-height: ${heights.nesthubMax})`,
    mobileXS: `(max-width: ${sizes.mobileXS})`,
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    tabletL: `(max-width: ${sizes.tabletL})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
  };