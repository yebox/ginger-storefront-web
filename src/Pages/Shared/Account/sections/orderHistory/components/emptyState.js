import React from "react";
import styled from "styled-components";
import { ShoppingBag } from "../../../../../../Assets/Svgs";

const EmptyOrderState = ({ title, subtitle }) => {
  return (
    <Container>
      <ShoppingBag />
      <ContentWrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </ContentWrapper>
    </Container>
  );
};

export default EmptyOrderState;

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
`;

const Subtitle = styled.p`
  color: var(--Black-300, #626262);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
`;
