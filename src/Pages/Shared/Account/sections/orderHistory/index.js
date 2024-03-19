import React from "react";
import { EditIcon } from "../../../../../Assets/Svgs";
import OrderCard from "./components/order";
import { styled } from "styled-components";
import { useApiGet } from "../../../../../Hooks/api";
import { getOrders } from "../../../../../Urls/orders";
import { devices } from "../../../../../Utils";
import { LineLoader } from "../../../../../Ui_elements";
import EmptyOrderState from "./components/emptyState";

const OrderHistory = () => {
  const { data, isLoading } = useApiGet("get-orders", getOrders, {
    select: (data) => data,
    onError: (error) => console.log(error),
  });

  return (
    <Container>
      <TopWrapper>
        <Title>Order History</Title>
        <EditIcon />
      </TopWrapper>
      <BottomWrapper>
        {data?.length > 0
          ? data?.map((order, idx) => <OrderCard key={idx} {...order} />)
          : !isLoading && <EmptyOrderState title={"No orders found"} />}
      </BottomWrapper>
      <LineLoader loading={isLoading} />
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

const BottomWrapper = styled.div`
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

const EmptyOrderTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 10px;
  width: 100%;
  text-align: center;
`;
