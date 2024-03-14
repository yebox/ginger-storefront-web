import React from "react";
import { EditIcon } from "../../../../../Assets/Svgs";
import { orders } from "./components/data";
import OrderCard from "./components/order";
import { styled } from "styled-components";
import { useApiGet } from "../../../../../Hooks/api";
import { getOrders } from "../../../../../Urls/orders";
import { devices } from "../../../../../Utils";

const OrderHistory = () => {
  const { data, isLoading, isError } = useApiGet("get-orders", getOrders, {
    select: (data) => data.data,
    onError: (error) => console.log(error),
  });

  console.log({ data });

  return (
    <Container>
      <TopWrapper>
        <Title>Order History</Title>
        <EditIcon />
      </TopWrapper>
      <BottomWrapepr>
        {orders.map((order, idx) => (
          <OrderCard key={idx} {...order} />
        ))}
      </BottomWrapepr>
    </Container>
  );
};

export default OrderHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.774px solid #eaeaea;
  background: #fff;
  height: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  padding: 32px 5vw 32px 45px;

  @media ${devices.mobileL} {
    padding: 20px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const BottomWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 40px 5vw 48px 45px;

  @media ${devices.mobileL} {
    padding: 20px;
    gap: 20px;
  }
`;

const Title = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;
