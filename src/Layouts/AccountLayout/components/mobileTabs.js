import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileAccountTab = ({
  to,
  label,
  isActive,
  setCurrentTabPos,
  currentTabPos,
}) => {
  const tabRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const inViewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting);
    });
  });

  useEffect(() => {
    tabRef && inViewObserver.observe(tabRef?.current);
    // Clean up observer on unmount
    return () => inViewObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isActive && tabRef.current) {
      const tabPosition = tabRef.current.offsetLeft;
      const containerScrollLeft = tabRef.current.offsetParent.scrollLeft;
      const containerWidth = tabRef.current.offsetParent.offsetWidth;
      if (
        (tabPosition < containerScrollLeft ||
          tabPosition + tabRef.current.offsetWidth >
            containerScrollLeft + containerWidth) &&
        !isInView
      ) {
        console.log(`in`, isInView);
        tabRef.current.parentNode.scroll({
          left:
            tabPosition - (containerWidth - tabRef.current.offsetWidth) / 1.2,
          behavior: "smooth",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <Container to={to} $active={isActive} ref={tabRef}>
      {label}
      <ActiveLine $active={isActive} />
    </Container>
  );
};
export default MobileAccountTab;

const Container = styled(Link)`
  position: relative;
  color: ${({ $active }) =>
    $active ? `var(--Black-500, #151515)` : `var(--Black-300, #626262)`};
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? `500` : `400`)};
  font-size: ${({ $active }) => ($active ? `16px` : `15px`)};
  padding-bottom: 7px;
  width: fit-content;
  flex-shrink: 0;
  line-height: 120%;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    color: unset;
  }
`;

const ActiveLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  height: 2px; /* Set initial height */
  background-color: #151515; /* Color of the active line */
  transition: width 0.25s ease; /* Transition width for smooth animation */
  width: ${({ $active }) =>
    $active ? "100%" : "0%"}; /* Initially set width to 100% */
`;
