import React from "react";
import { styled } from "styled-components";
import { GCheckbox } from "../../../Ui_elements";

export const TopStoresFilter = () => {
  return (
    <Container>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>OLAPLEX</FilterLabel>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>ELF</FilterLabel>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>CANTU SHEA BUTTER</FilterLabel>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>MIZANI</FilterLabel>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>L’OREAL</FilterLabel>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>O.P.I</FilterLabel>
      </CheckWrapper>
      <CheckWrapper>
        <GCheckbox size={`20px`} isTransparent={true} />
        <FilterLabel>JUVIA’S PLACE</FilterLabel>
      </CheckWrapper>
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
