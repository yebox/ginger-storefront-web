import { useEffect, useState } from "react";
import { useDeviceCheck } from "../Hooks";

const useScrollHandler = () => {
  const [scrolledDown, setIsScrolledDown] = useState(false);
  const { isMobile } = useDeviceCheck();
  let prevScroll = window.scrollY;

  const handleScroll = () => {
    const currScroll = window.scrollY;
    const scrollCheck = isMobile ? currScroll > 15 : currScroll > 50;

    if (prevScroll > currScroll) {
      setIsScrolledDown(false);
    } else {
      setIsScrolledDown(scrollCheck);
    }

    prevScroll = currScroll;
  };

  function on(obj, ...args) {
    obj.addEventListener(...args);
  }

  function off(obj, ...args) {
    obj.removeEventListener(...args);
  }

  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrolledDown };
};

export default useScrollHandler;
