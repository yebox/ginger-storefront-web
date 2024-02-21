import React from "react";
import { styled } from "styled-components";
import { orderStatus } from "./data";

const StatusBagde = ({ status }) => {
  return <Container $status={status}>{status}</Container>;
};

export default StatusBagde;

const Container = styled.div`
  display: inline-flex;
  height: 28px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 12px;
  border-radius: 16px;
  background: ${({ $status }) =>
    $status === orderStatus.delivered
      ? `#ECFDF3`
      : $status === orderStatus.inTransit
      ? `#FFF6ED`
      : `#EFF8FF`};
  color: ${({ $status }) =>
    $status === orderStatus.delivered
      ? `#027A48`
      : $status === orderStatus.inTransit
      ? `#C4320A`
      : `#175CD3`};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
