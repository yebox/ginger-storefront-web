import React from "react";
import { styled } from "styled-components";
import { OrderTrackIcon, OrderTrackStar } from "../../../../../../Assets/Svgs";
import TrackStepper from "./trackStepper";
import CancelOrder from "./cancelOrder";

const stepData = {
  dateProcessed: `12/08/2022`,
  timeProcessed: `3:05pm`,
  dateDispatched: ``,
  timeDispatched: ``,
  dateDelivered: ``,
  timeDelivered: ``,
};

const OrderTracking = () => {
  return (
    <Container>
      <Header>
        <OrderTrackStar />
        <HeaderContent>
          <HeaderTitle>Order Tracking</HeaderTitle>
          <HeaderDescription>
            See details of the progress on your order
          </HeaderDescription>
        </HeaderContent>
        <OrderTrackIcon />
      </Header>
      <ContentWrapper>
        <TrackStepper {...stepData} />
      </ContentWrapper>
      <CancelOrder />
    </Container>
  );
};

export default OrderTracking;

const Container = styled.div`
  width: 50%;
  border-left: 1px solid #ececee;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 206px;
  background: #fffbf6;
  padding: 30px 5vw 30px 65px;

  & > svg:first-of-type {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 9px;
`;

const HeaderTitle = styled.p`
  color: var(--Black-500, #151515);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */
`;

const HeaderDescription = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  width: 85%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 5vw 57px 65px;
`;
