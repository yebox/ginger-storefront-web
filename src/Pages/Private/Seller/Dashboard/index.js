import React from "react";
import styled from "styled-components";
import { totalCards } from "./components/data";
import DashboardCard from "./components/DashboardCard";
import PendingOrders from "./components/PendingOrders";
import OrderHistory from "./components/OrderHistory";

const SellerDashboard = () => {
  return (
    <Container>
      <TopWrapper>
        <TopLeftWrapper>
          {totalCards.map((x, idx) => (
            <DashboardCard
              key={idx}
              {...x}
              isFirst={idx === 0}
              showTopBg={idx === 0}
              showBottomBg={idx === totalCards?.length - 1}
              noData={!x?.value}
            />
          ))}
        </TopLeftWrapper>
        <PendingOrders />
      </TopWrapper>
      <BottomWrapper>
        <OrderHistory />
      </BottomWrapper>
    </Container>
  );
};

export default SellerDashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

const TopLeftWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 60%;
`;

const BottomWrapper = styled.div`
  display: flex;
  gap: 32px;
`;
