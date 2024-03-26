import React from "react";
import styled from "styled-components";
import { formatAmount } from "../../../../../Utils";
import { AccountLeftStar } from "../../../../../Assets/Svgs";

const DashboardCard = ({
  icon: Icon,
  title,
  value,
  noData,
  isFirst,
  showTopBg,
  showBottomBg,
}) => {
  return (
    <Container $noData={noData} $isFirst={isFirst}>
      <Icon />
      <ContentWrapper>
        {showTopBg && <TopRightBgIcon />}
        <Title>{title}</Title>
        <Value>{formatAmount(value) || 0}</Value>
        {showBottomBg && <BottomRightBgIcon />}
      </ContentWrapper>
    </Container>
  );
};

export default DashboardCard;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px;
  min-width: 297px;
  width: 47%;
  flex-shrink: 0;
  background: ${({ $isFirst }) => ($isFirst ? `#ffece9` : `#FEFEFE`)};
  overflow: hidden;

  & > svg {
    width: 32px;
    height: 32px;
    flex-shrink: 0;

    path {
      fill: ${({ $noData }) => $noData && `#B6B6B6`};
    }
  }
`;

const TopRightBgIcon = styled(AccountLeftStar)`
  position: absolute;
  top: -107px;
  right: -100px;
  width: 190px;
  height: 190px;
  flex-shrink: 0;
`;

const BottomRightBgIcon = styled(TopRightBgIcon)`
  position: absolute;
  top: unset;
  bottom: -75px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;

const Value = styled.p`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 44px */
`;
