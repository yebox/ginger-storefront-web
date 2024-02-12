import React from "react";
import { styled } from "styled-components";
import { CaretLeft } from "../../../Assets/Svgs";

const MarketPlace = () => {
  return (
    <Container>
      <HeaderWrapper>
        <CaretLeft />
        <Title>Marketplace</Title>
      </HeaderWrapper>
    </Container>
  );
};

export default MarketPlace;

const Container = styled.div``;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 40px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
