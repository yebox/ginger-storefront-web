import React from "react";
import styled from "styled-components";
import { pendingOrders } from "./data";
import PendingOrderCard from "./PendingOrderCard";

const PendingOrders = () => {
  return (
    <Container>
      <TopWrapper>
        <Title>Pending orders</Title>
        <SeeAll>See all</SeeAll>
      </TopWrapper>
      <CardWrapper>
        {pendingOrders.map((x, idx) => (
          <PendingOrderCard key={idx} {...x} />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default PendingOrders;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 40%;
  max-width: 380px;
  padding: 24px 24px 10px;
  background: #fefefe;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
`;

const SeeAll = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  text-decoration-line: underline;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  max-height: 300px;
  padding-right: 6px;
`;
