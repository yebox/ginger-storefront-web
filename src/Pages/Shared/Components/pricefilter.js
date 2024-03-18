import React, { useState } from "react";
import { styled } from "styled-components";
import { GCheckbox } from "../../../Ui_elements";
import isEqual from "lodash/isEqual";

export const PriceFilter = ({ setFilterValue, filterValue }) => {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [priceData, setPriceData] = useState();

  const handleChange = (name, value) => {
    setPriceData({ ...priceData, [name]: value });
  };

  return (
    <Container>
      <PriceRange>
        <PriceInput
          $isFocus={currentFocus === 1}
          placeholder="₦ 0.00"
          type="number"
          name="gt"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          onFocus={() => setCurrentFocus(1)}
          onBlur={() => setCurrentFocus(0)}
        />
        <Stroke />
        <PriceInput
          placeholder="₦ 0.00"
          type="number"
          name="lt"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          $isFocus={currentFocus === 2}
          onFocus={() => setCurrentFocus(2)}
          onBlur={() => setCurrentFocus(0)}
        />
        <ApplyTxt onClick={() => setFilterValue(priceData)}>Apply</ApplyTxt>
      </PriceRange>
      <CheckWrapper onClick={() => setFilterValue({ lt: 4000 })}>
        <GCheckbox
          size={`20px`}
          isTransparent={true}
          checked={isEqual(filterValue, { lt: 4000 })}
        />
        <FilterAmt>Under 4,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper onClick={() => setFilterValue({ gt: 4000, lt: 24000 })}>
        <GCheckbox
          size={`20px`}
          isTransparent={true}
          checked={isEqual(filterValue, { gt: 4000, lt: 24000 })}
        />
        <FilterAmt>4,000 - 24,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper onClick={() => setFilterValue({ gt: 24000, lt: 200000 })}>
        <GCheckbox
          size={`20px`}
          isTransparent={true}
          checked={isEqual(filterValue, { gt: 24000, lt: 200000 })}
        />
        <FilterAmt>24,000 - 200,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper
        onClick={() => setFilterValue({ gt: 200000, lt: 10000000 })}
      >
        <GCheckbox
          size={`20px`}
          isTransparent={true}
          checked={isEqual(filterValue, { gt: 200000, lt: 10000000 })}
        />
        <FilterAmt>200,000 - 10,000,000</FilterAmt>
      </CheckWrapper>
      <CheckWrapper onClick={() => setFilterValue({ gt: 10000000 })}>
        <GCheckbox
          size={`20px`}
          isTransparent={true}
          checked={isEqual(filterValue, { gt: 10000000 })}
        />
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
