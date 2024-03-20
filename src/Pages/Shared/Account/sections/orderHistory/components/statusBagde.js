import React from "react";
import { styled } from "styled-components";
import { orderStatusMapping } from "../../../../../../Utils";

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
    $status === orderStatusMapping.cancelled
      ? `#f7dfe2`
      : $status === orderStatusMapping.completed
      ? `#ECFDF3`
      : $status === orderStatusMapping.processed
      ? `#EFF8FF`
      : `#fffaeb`};
  color: ${({ $status }) =>
    $status === orderStatusMapping.cancelled
      ? `#E71D36`
      : $status === orderStatusMapping.completed
      ? `#027A48`
      : $status === orderStatusMapping.processed
      ? `#175CD3`
      : `#B54708`};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
