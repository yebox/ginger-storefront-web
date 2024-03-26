import React from "react";
import styled from "styled-components";
import OrderTableEntry from "./OrderTableEntry";
import { orderHistory } from "./data";

const OrderHistory = () => {
  return (
    <Container>
      <Title>Order history</Title>
      <Table>
        <TableHeader>
          <HeaderTxt $width={`25%`}>Order ID</HeaderTxt>
          <HeaderTxt $width={`20%`}>Date</HeaderTxt>
          <HeaderTxt $width={`20%`}>Price</HeaderTxt>
          <HeaderTxt $width={`20%`}> Status</HeaderTxt>
        </TableHeader>
        {orderHistory.map((x, idx) => (
          <OrderTableEntry key={idx} {...x} isOdd={idx % 2 !== 0} />
        ))}
      </Table>
    </Container>
  );
};

export default OrderHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background: #fefefe;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin: 24px 0 30px 24px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 20px;
`;

const HeaderTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  width: ${({ $width }) => ($width ? $width : `100px`)};
  line-height: 140%; /* 25.2px */
`;
