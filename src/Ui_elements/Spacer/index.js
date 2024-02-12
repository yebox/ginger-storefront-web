import React from "react";
import { styled } from "styled-components";

export const GSpacer = ({ size }) => {
  return <Spacer $size={size} />;
};

const Spacer = styled.div`
  height: ${({ $size }) => ($size ? `${$size}px` : `10px`)};
`;
