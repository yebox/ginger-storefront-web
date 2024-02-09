import React from "react";
import { styled } from "styled-components";

const GSpacer = ({ size }) => {
  return <Spacer $size={size} />;
};

export default GSpacer;

const Spacer = styled.div`
  height: ${({ $size }) => ($size ? `${$size}px` : `10px`)};
`;
