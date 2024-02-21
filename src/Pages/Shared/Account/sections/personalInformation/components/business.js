import React, { useState } from "react";
import { styled } from "styled-components";
import { EditIcon } from "../../../../../../Assets/Svgs";
import BusinessModal from "./modals/business";

const Business = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <TopWrapper>
        <Title>Business information</Title>
        <EditIcon onClick={() => setIsModalOpen(true)} />
      </TopWrapper>
      <BottomWrapper>
        <Entry>
          <Label>Business type</Label>
          <Value>Online store</Value>
        </Entry>
        <Entry>
          <Label>Business name</Label>
          <Value>The beauty boutique</Value>
        </Entry>
        <Entry>
          <Label>Website or social media url</Label>
          <Value>https:// thebeautyboutique.com</Value>
        </Entry>
        <Entry>
          <Label>Business date</Label>
          <Value>Started between 2019 to 2022</Value>
        </Entry>
      </BottomWrapper>
      <BusinessModal
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </Container>
  );
};

export default Business;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.774px solid #eaeaea;
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
  gap: 40px;
  padding: 40px 5vw 48px 45px;
`;

const Title = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const Entry = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`;

const Label = styled.p`
  color: var(--Black-100, #b6b6b6);
  width: 190px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;

const Value = styled.p`
  color: var(--Black-300, #626262);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
`;
