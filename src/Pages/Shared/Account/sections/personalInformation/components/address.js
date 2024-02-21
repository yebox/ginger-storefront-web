import React, { useState } from "react";
import { styled } from "styled-components";
import { Plus } from "../../../../../../Assets/Svgs";
import AddressModal from "./modals/address";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <TopWrapper>
        <Title>Address book</Title>
      </TopWrapper>
      <BottomWrapper>
        <AddressWrapper>
          <AddressBox>
            <AddressTop>
              <AddressName>Maxwell Phillip</AddressName>
              <DefaultTag>Default shipping address</DefaultTag>
            </AddressTop>
            <AddressTxt>20a wallstreet junction, ibadan, Nigeria.</AddressTxt>
            <AddressNumber>07096885784</AddressNumber>
          </AddressBox>
          <AddressBox>
            <AddressTop>
              <AddressName>Maxwell Phillip</AddressName>
            </AddressTop>
            <AddressTxt>20a wallstreet junction, ibadan, Nigeria.</AddressTxt>
            <AddressNumber>07096885784</AddressNumber>
          </AddressBox>
        </AddressWrapper>
        <AddMoreBtn onClick={() => setIsModalOpen(true)}>
          <PlusIcon />
          Add new address
        </AddMoreBtn>
      </BottomWrapper>
      <AddressModal
        handleClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </Container>
  );
};

export default Address;

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

const Title = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 32px 5vw 44px 45px;
`;

const AddressWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const AddressBox = styled.div`
  width: 373px;
  flex-shrink: 0;
  padding: 19px 16px;
  border: 0.774px solid #eaeaea;
  background: #fff;
`;

const AddressTop = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const AddressName = styled.p`
  color: var(--Black-100, #b6b6b6);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const AddressTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-top: 16px;
`;

const AddressNumber = styled.p`
  color: var(--Black-300, #626262);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 22px;
`;

const DefaultTag = styled.span`
  display: flex;
  padding: 4px 8px 6px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  background: var(--Success-50, #ecfdf3);
  color: var(--Success-700, #027a48);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

const AddMoreBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  cursor: pointer;
`;

const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  & path {
    fill: #ff4623;
  }
`;
