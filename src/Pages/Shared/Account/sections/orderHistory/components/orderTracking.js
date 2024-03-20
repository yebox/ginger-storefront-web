import React from "react";
import { styled } from "styled-components";
import { OrderTrackIcon, OrderTrackStar } from "../../../../../../Assets/Svgs";
import TrackStepper from "./trackStepper";
import CancelOrder from "./cancelOrder";
import { devices, orderStatusMapping } from "../../../../../../Utils";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const OrderTracking = ({ order, status }) => {
  let stepData = {};
  const getDateTime = (timeStamp, key) => {
    const processedDateTime = dayjs(timeStamp).format("L LT");
    const processedTimeArr = processedDateTime.split(" ");
    stepData[`date${key}`] = processedTimeArr[0];
    stepData[`time${key}`] = processedTimeArr.slice(1).join("");
  };

  order?.dateProcessed && getDateTime(order?.dateProcessed, `Processed`);
  order?.dateDispatched && getDateTime(order?.dateDispatched, `Dispatched`);
  order?.dateDelivered && getDateTime(order?.dateDelivered, `Delivered`);

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
      {status === orderStatusMapping.pending && (
        <CancelOrder orderId={order?.id} />
      )}
    </Container>
  );
};

export default OrderTracking;

const Container = styled.div`
  width: 50%;
  border-left: 1px solid #ececee;

  @media ${devices.mobileL} {
    margin-top: 70px;
    width: 100%;
  }
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

  @media ${devices.mobileL} {
    padding: 20px;
    height: 135px;
    padding-top: 20px;

    & > svg:first-of-type {
      height: 100%;
    }
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

  @media ${devices.mobileL} {
    padding: 20px;
    margin-top: 15px;
  }
`;
