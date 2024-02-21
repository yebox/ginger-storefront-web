import React from "react";
import { styled } from "styled-components";

const CancelOrder = () => {
  return (
    <Container>
      <Title>Cancel order</Title>
      <Desc>You can only cancel an order before your order is accepted</Desc>
      <CancelBtn>Cancel Order</CancelBtn>
    </Container>
  );
};

export default CancelOrder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 88px;
  padding: 0 5vw 0 65px;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
`;

const Desc = styled.p`
  color: var(--Black-300, #626262);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 26.4px */
  margin-top: 10px;
`;

const CancelBtn = styled.div`
  display: flex;
  width: 560px;
  height: 55px;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #e71d36;
  margin-top: 40px;
  color: var(--Shade-White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  cursor: pointer;
`;
