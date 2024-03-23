import React from "react";
import styled from "styled-components";
import { OrderBag } from "../../../../../../Assets/Svgs";
import { devices } from "../../../../../../Utils";

const EmptyOrderState = ({ title, subtitle }) => {
  return (
    <Container>
      <OrderBag />
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

  @media ${devices.mobileL} {
    margin-top: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media ${devices.mobileL} {
    gap: 12px;
  }
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */

  @media ${devices.mobileL} {
    font-size: 18px;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  color: var(--Black-300, #626262);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;
