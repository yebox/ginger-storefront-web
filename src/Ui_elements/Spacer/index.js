import React from "react";
import { styled } from "styled-components";
import { devices } from "../../Utils";

export const GSpacer = ({ size, mbSize }) => {
  return <Spacer $size={size} $mbSize={mbSize} />;
};

const Spacer = styled.div`
  height: ${({ $size }) => ($size ? `${$size}px` : `10px`)};

  @media ${devices.mobileL} {
    height: ${({ $mbSize, $size }) =>
      $mbSize ? `${$mbSize}px` : `${$size}px`};
  }
`;
