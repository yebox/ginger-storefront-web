import React, { useState } from "react";
import { styled } from "styled-components";
import { NotificationIcon } from "../../../../../../Assets/Svgs";

const NotificationCard = ({ title, detail, date, isLast }) => {
  const [isRead, setIsRead] = useState(false);
  return (
    <Container onClick={() => setIsRead(true)} $isRead={isRead}>
      <NotificationIcon />
      <ContentWrapper>
        <Title $isRead={isRead}>{title}</Title>
        <Detail>{detail}</Detail>
        <StatusWrapper>
          <Date>{date}</Date>
          {!isRead && <UnReadBall />}
        </StatusWrapper>
        {!isLast && <Divider />}
      </ContentWrapper>
    </Container>
  );
};

export default NotificationCard;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17px;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 9px;
    transition: all 0.25s ease;

    g {
      path {
        fill: ${({ $isRead }) => ($isRead ? `#B6B6B6` : `#151515`)};
      }
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.p`
  color: ${({ $isRead }) => ($isRead ? `#B3B3B3` : `#000`)};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  margin-bottom: 10px;
  transition: all 0.25s ease;
`;

const Detail = styled.p`
  color: var(--gray-3, #828282);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
`;

const StatusWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Date = styled.p`
  color: var(--gray-3, #828282);
  text-align: right;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
`;

const UnReadBall = styled.span`
  width: 8.161px;
  height: 8px;
  flex-shrink: 0;
  background: #ff9e1a;
  border-radius: 50%;
`;

const Divider = styled.span`
  width: 100%;
  height: 1.279px;
  background: rgba(230, 230, 230, 0.4);
  margin-top: 24px;
`;
