import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuItem = ({ item, active }) => {
  return (
    <Container $active={active} to={item?.path}>
      {item.title}
    </Container>
  );
};

const Container = styled(Link)`
  color: ${({ $active }) => ($active ? `#FF4623` : `#626262`)};
  font-size: ${({ $active }) => ($active ? `28px` : `22px`)};
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? `500` : `400`)};
  line-height: 120%;
  transition: all 0.25s ease;
`;
