import React, { useState } from "react";
import { styled } from "styled-components";
import { Minus, Plus } from "../../../../Assets/Svgs";
import { devices } from "../../../../Utils";

const QuantityCounter = ({ moq, value, setValue }) => {
  const maxQuantity = 10;

  const handleAdd = () => {
    setValue((prev) => prev + (moq || 1));
  };

  const handleSubtract = () => {
    setValue((prev) => prev - (moq || 1));
  };

  return (
    <Container>
      <Control onClick={handleSubtract} disabled={value === (moq || 0)}>
        <Minus />
      </Control>
      <ValueBox>{value}</ValueBox>
      <Control onClick={handleAdd} disabled={value === maxQuantity}>
        <Plus />
      </Control>
    </Container>
  );
};

export default QuantityCounter;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Control = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 52px;
  background: transparent;
  flex-shrink: 0;
  outline: none;
  border: 1px solid var(--Black-100, #b6b6b6);
  cursor: pointer;

  &:disabled {
    & > svg {
      opacity: 0.5;
    }
  }

  @media ${devices.mobileL} {
    width: 50px;
  }
`;

const ValueBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--Black-100, #b6b6b6);
  border-bottom: 1px solid var(--Black-100, #b6b6b6);
  padding: 7.4px 0;
  width: 142px;
  color: var(--Black-500, #151515);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 40.8px */

  @media ${devices.mobileL} {
    width: 120px;
  }
`;
