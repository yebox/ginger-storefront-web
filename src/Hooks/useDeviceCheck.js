export const useDeviceCheck = () => {
  return {
    isMobile: window.matchMedia("(max-width: 600px)").matches,
    isTablet: window.matchMedia("(min-width: 768px) and (max-width: 1024px)")
      .matches,
    isDesktop: window.matchMedia("(min-width: 1024px)").matches,
  };
};
