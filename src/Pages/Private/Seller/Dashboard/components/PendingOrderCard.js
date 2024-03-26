import React from "react";
import styled from "styled-components";
import { PendingOrders } from "../../../../../Assets/Svgs";

const PendingOrderCard = ({ amount, orderNo }) => {
  return (
    <Container>
      <LeftWrapper>
        <PendingOrders />
        <TxtWrapper>
          <Amount>{amount}</Amount>
          <OrderNo>{orderNo}</OrderNo>
        </TxtWrapper>
      </LeftWrapper>
      <SeeDetailsBtn>See details</SeeDetailsBtn>
    </Container>
  );
};

export default PendingOrderCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 14px;
  border: 1px solid var(--Black-50, #e8e8e8);
  background: var(--White, #fefefe);
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Amount = styled.p`
  color: var(--Xtride-Black-100, #000);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const OrderNo = styled.p`
  color: var(--Primary-300, #ff836c);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 12px */
`;

const SeeDetailsBtn = styled.p`
  display: flex;
  width: 89px;
  height: 25px;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: var(--White, #fefefe);
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
  background: var(--Primary-500, #ff4623);
  cursor: pointer;
`;
