import React from "react";
import { styled } from "styled-components";
import { CaretLeft } from "../../../../../../Assets/Svgs";
import { Link } from "react-router-dom";

const OrderCard = ({
  imageUrl,
  productName,
  orderNumber,
  dateDelivered,
  status,
}) => {
  return (
    <Container>
      <LeftWrapper>
        <Image src={imageUrl} />
        <DetailsWrapper>
          <ProductName>{productName}</ProductName>
          <OrderName>{`order ${orderNumber}`}</OrderName>
          {dateDelivered ? (
            <DeliveryStatus>
              Delivered on: <span>{dateDelivered}</span>
            </DeliveryStatus>
          ) : (
            <DeliveryStatus>Not delivered</DeliveryStatus>
          )}
        </DetailsWrapper>
      </LeftWrapper>
      <RightWrapper to={"/account/order/1"}>
        <TrackTxt>
          {status.toLowerCase() === "ongoing" ? `Track order` : `See details`}
        </TrackTxt>
        <CaretLeft />
      </RightWrapper>
      <Status $status={status.toLowerCase()}>
        <StatusBall />
        <StatusTxt>{status}</StatusTxt>
      </Status>
    </Container>
  );
};

export default OrderCard;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 24px 14px 14px;
  height: 102px;
  border: 1px solid var(--Black-50, #e8e8e8);
  background: var(--White, #fefefe);
`;

const Image = styled.img`
  width: 73px;
  height: 73px;
  flex-shrink: 0;
  object-fit: cover;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 3px 0;
`;

const ProductName = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
`;

const OrderName = styled.p`
  color: var(--Primary-300, #ff836c);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 12px */
  margin-top: auto;
`;

const DeliveryStatus = styled.p`
  color: var(--Black-100, #b6b6b6);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */

  & > span {
    color: var(--Black-300, #626262);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }
`;

const Status = styled.div`
  position: absolute;
  top: 18px;
  right: 24px;
  display: flex;
  padding: 2px 8px 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  border-radius: 16px;
  background: ${({ $status }) =>
    $status === "ongoing" ? `#fffaeb` : `#ECFDF3`};

  & > span {
    background: ${({ $status }) =>
      $status === "ongoing" ? `#F79009` : `#027A48`};
  }

  & > p {
    color: ${({ $status }) => ($status === "ongoing" ? `#B54708` : `#027A48`)};
  }
`;

const StatusBall = styled.span`
  color: var(--Warning-700, #b54708);
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

const StatusTxt = styled.p`
  color: var(--Warning-700, #b54708);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 12px */
`;

const TrackTxt = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  transition: all 0.25s ease;
`;

const RightWrapper = styled(Link)`
  display: flex;
  gap: 3px;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
    margin-top: 3px;
    transition: all 0.25s ease;

    path {
      stroke: #ff4623;
    }
  }

  &:hover {
    & > p {
      color: #eb4526;
    }

    & > svg {
      path {
        stroke: #eb4526;
      }
    }
  }
`;
