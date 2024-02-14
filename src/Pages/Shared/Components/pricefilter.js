import React, { useState } from "react";
import { styled } from "styled-components";
import { GCheckbox } from "../../../Ui_elements";

export const PriceFilter = () => {
  const [currentFocus, setCurrentFocus] = useState(0);

  return (
    <Container>
      <PriceRange>
        <PriceInput
          $isFocus={currentFocus === 1}
          placeholder="₦ 0.00"
          type="number"
          onFocus={() => setCurrentFocus(1)}
          onBlur={() => setCurrentFocus(0)}
        />
        <Stroke />
        <PriceInput
          placeholder="₦ 0.00"
          type="number"
          $isFocus={currentFocus === 2}
          onFocus={() => setCurrentFocus(2)}
          onBlur={() => setCurrentFocus(0)}
        />
        <ApplyTxt>Apply</ApplyTxt>
      </PriceRange>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterAmt>Under 4,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterAmt>4,000 - 24,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterAmt>24,000 - 200,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterAmt>200,000 - 10,000,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterAmt>More than 10,000,000</FilterAmt>
      </CheckWrapper>
    </Container>
  );
};




const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PriceInput = styled.input`
  height: 28px;
  width: 45%;
  padding: 5px 8px;
  gap: 10px;
  flex: 1 0 0;
  outline: none;
  color: var(--Black-100, #151515);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 12px */
  border: ${({ $isFocus }) =>
    $isFocus ? `1px solid #151515` : `1px solid #b8b8b8`};
  transition: all 0.25s ease;

  &::placeholder {
    color: var(--Black-100, #b6b6b6);
  }
`;

const Stroke = styled.span`
  width: 5px;
  height: 1.4px;
  opacity: 0.6;
  background-color: #666;
`;

const ApplyTxt = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
  cursor: pointer;
`;

const CheckWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 4px 0;
  cursor: pointer;
`;

const FilterAmt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
`;
