import React, { useState } from "react";
import { styled } from "styled-components";
import { EditIcon } from "../../../../../../Assets/Svgs";
import PersonalModal from "./modals/personal";
import { useSelector } from "react-redux";
import { devices } from "../../../../../../Utils";

const Personal = () => {
  const user = useSelector((state) => state?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <TopWrapper>
        <Title>Personal information</Title>
        <EditIcon onClick={() => setIsModalOpen(true)} />
      </TopWrapper>
      <BottomWrapepr>
        <Entry>
          <Label>Full name</Label>
          <Value>{`${user?.firstName} ${user?.lastName}`}</Value>
        </Entry>
        <Entry>
          <Label>Phone number</Label>
          <Value>{user?.phoneNumber}</Value>
        </Entry>
        <Entry>
          <Label>Email address</Label>
          <Value>{user?.email}</Value>
        </Entry>
        <Entry>
          <Label>Country</Label>
          <Value>{user?.country}</Value>
        </Entry>
      </BottomWrapepr>
      <PersonalModal
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </Container>
  );
};

export default Personal;

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

  & > svg {
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    padding: 20px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const BottomWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 5vw 48px 45px;

  @media ${devices.mobileL} {
    padding: 20px 20px 30px;
  }
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

  @media ${devices.mobileL} {
    gap: 45px;
  }
`;

const Label = styled.p`
  color: var(--Black-100, #b6b6b6);
  width: 190px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */

  @media ${devices.mobileL} {
    font-size: 12px;
    width: 80px;
  }
`;

const Value = styled.p`
  color: var(--Black-300, #626262);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */

  @media ${devices.mobileL} {
    font-size: 15px;
  }
`;
