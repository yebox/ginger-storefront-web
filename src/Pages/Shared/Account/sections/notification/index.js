import React from "react";
import { styled } from "styled-components";
import { EditIcon, NotificationBell } from "../../../../../Assets/Svgs";
import { notifications } from "./components/data";
import NotificationCard from "./components/card";

const Notification = () => {
  return (
    <Container>
      <TopWrapper>
        <Title>Notification</Title>
        <EditIcon />
      </TopWrapper>
      <BottomWrapper>
        {notifications.length > 0 ? (
          notifications.map((x, idx) => (
            <NotificationCard
              key={idx}
              {...x}
              isLast={notifications.length - 1 === idx}
            />
          ))
        ) : (
          <EmptyState>
            <NotificationBell />
            <EmptyTxt>No activities at this time</EmptyTxt>
          </EmptyState>
        )}
      </BottomWrapper>
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  padding: 32px 5vw 32px 45px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 40px 5vw 48px 45px;
`;

const Title = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 30px;

  & > svg {
    width: 104px;
    height: 104px;
    flex-shrink: 0;
  }
`;

const EmptyTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
`;
