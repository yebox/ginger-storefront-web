import React from "react";
import { styled } from "styled-components";
import { CaretLeft } from "../../../../../../Assets/Svgs";
import { Link } from "react-router-dom";
import {
  devices,
  formatImage,
  formatOrderStatus,
  orderStatusMapping,
} from "../../../../../../Utils";

const OrderCard = ({ id, items, reference, dateDelivered, status }) => {
  const itemCount = items?.length;
  const displayProduct = itemCount > 0 && items[0]?.product;
  const orderStatus = formatOrderStatus(status);

  return (
    <Container>
      <Image src={formatImage(displayProduct?.mainImage)} />
      <ContentWrapper>
        <LeftWrapper>
          <DetailsWrapper>
            <NameCountWrapper>
              <ProductName>{displayProduct?.name}</ProductName>
              {itemCount > 1 && <ItemCount>{itemCount} items</ItemCount>}
            </NameCountWrapper>
            <OrderName>{`order ${reference}`}</OrderName>
            {dateDelivered ? (
              <DeliveryStatus>
                Delivered on: <span>{dateDelivered}</span>
              </DeliveryStatus>
            ) : (
              <DeliveryStatus>Not delivered</DeliveryStatus>
            )}
          </DetailsWrapper>
        </LeftWrapper>
        <RightWrapper to={`/account/order-history/${id}`}>
          <TrackTxt>
            {orderStatus === orderStatusMapping.completed
              ? `See details`
              : `Track order`}
          </TrackTxt>
          <CaretLeft />
        </RightWrapper>
      </ContentWrapper>
      <Status $status={orderStatus}>
        <StatusBall />
        <StatusTxt>{orderStatus}</StatusTxt>
      </Status>
    </Container>
  );
};

export default OrderCard;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 14px 24px 14px 14px;
  height: 102px;
  border: 1px solid var(--Black-50, #e8e8e8);
  background: var(--White, #fefefe);

  @media ${devices.mobileL} {
    flex-direction: column;
    height: auto;
    padding: 14px;
    gap: 10px;
  }
`;

const Image = styled.img`
  width: 73px;
  height: 73px;
  flex-shrink: 0;
  object-fit: cover;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  @media ${devices.mobileL} {
    gap: 30px;
  }
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

const NameCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductName = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
  width: 80%;
`;

const ItemCount = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  padding: 2px 9px 3px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: var(
    --Black-500,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #151515
  );
  color: var(--White, #fefefe);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 12px */
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
  padding: 2px 8px 3px 6px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  border-radius: 16px;
  background: ${({ $status }) =>
    $status === orderStatusMapping.cancelled
      ? `#f7dfe2`
      : $status === orderStatusMapping.completed
      ? `#ECFDF3`
      : `#fffaeb`};

  & > span {
    background: ${({ $status }) =>
      $status === orderStatusMapping.cancelled
        ? `#E71D36`
        : $status === orderStatusMapping.completed
        ? `#027A48`
        : `#F79009`};
  }

  & > p {
    color: ${({ $status }) =>
      $status === orderStatusMapping.cancelled
        ? `#E71D36`
        : $status === orderStatusMapping.completed
        ? `#027A48`
        : `#B54708`};
  }

  @media ${devices.mobileL} {
    top: 110px;
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

  @media ${devices.mobileL} {
    font-size: 13px;
  }
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

  @media ${devices.mobileL} {
    flex-shrink: 0;

    & > svg {
      width: 18px;
      height: 18px;
    }
  }
`;
