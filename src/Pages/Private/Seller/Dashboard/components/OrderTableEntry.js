import React from "react";
import styled from "styled-components";

const OrderTableEntry = ({ orderId, date, price, status, isOdd }) => {
  return (
    <Container $isOdd={isOdd}>
      <EntryTxt $width={`25%`}>{orderId}</EntryTxt>
      <EntryTxt $width={`20%`}>{date}</EntryTxt>
      <EntryTxt $width={`20%`}>{price}</EntryTxt>
      <Status $width={`20%`}>
        <StatusBall />
        <EntryTxt>{status}</EntryTxt>
      </Status>
    </Container>
  );
};

export default OrderTableEntry;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 30px;
  align-items: center;
  background: ${({ $isOdd }) => ($isOdd ? `#F9F9F9` : `#fefefe`)};
`;

const EntryTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: ${({ $width }) => $width && $width};
  line-height: 120%; /* 19.2px */
`;

const Status = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding-left: 7px;
  width: ${({ $width }) => ($width ? $width : `100px`)};
`;

const StatusBall = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Ginger-Success, #3ac808);
`;
