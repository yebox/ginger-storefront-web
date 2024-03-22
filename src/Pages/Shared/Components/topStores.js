import { useState } from "react";
import { styled } from "styled-components";
import { GCheckbox } from "../../../Ui_elements";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const TopStoresFilter = ({
  options,
  selectedBrand,
  setSelectedBrand,
  category,
  subCategory
}) => {
  const navigate = useNavigate()
  const handleCheckboxChange = (item) => {
    setSelectedBrand(prevSelectedBrand => prevSelectedBrand === item ? '' : item);
  };


  useEffect(() => {
    navigate(`/categories/${encodeURIComponent(category?.name)}?cat=${encodeURIComponent(JSON.stringify(category))}&sub_cat=${encodeURIComponent(JSON.stringify(subCategory))}&activeInit=${decodeURIComponent(subCategory?._id)}&init=${subCategory?.name}&brand=${selectedBrand ? decodeURIComponent(selectedBrand) : ''}`);
  }, [selectedBrand]);

  return (
    <Container>
      {options?.map((item, index) => (
        <CheckWrapper key={index}>
          <GCheckbox
            checked={selectedBrand === item}
            onChange={() => handleCheckboxChange(item)}
            size={`20px`}
            isTransparent={true}
          />
          <FilterLabel>{item?.name}</FilterLabel>
        </CheckWrapper>
      ))}
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CheckWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 4px 0;
  cursor: pointer;
`;

const FilterLabel = styled.p`
  color: var(--Black-500, #151515);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
`;
