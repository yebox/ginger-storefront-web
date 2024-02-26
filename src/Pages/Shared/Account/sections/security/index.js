import React, { useState } from "react";
import { styled } from "styled-components";
import { EditIcon } from "../../../../../Assets/Svgs";
import Tfa from "./components/tfa";
import { GButton } from "../../../../../Ui_elements";
import PasswordModal from "./components/password";

const Security = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <TopWrapper>
        <Title>Password & security</Title>
        <EditIcon />
      </TopWrapper>
      <BottomWrapper>
        <Tfa />
        <GButton
          label={`Update password`}
          width={`169px`}
          onClick={() => setIsModalOpen(true)}
        />
      </BottomWrapper>
      <PasswordModal
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </Container>
  );
};

export default Security;

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
  align-items: flex-end;
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
