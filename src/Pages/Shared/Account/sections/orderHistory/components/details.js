import React, { useEffect } from "react";
import { styled } from "styled-components";
import { CaretLeft, Visa } from "../../../../../../Assets/Svgs";
import { GButton } from "../../../../../../Ui_elements";
import { useNavigate } from "react-router-dom";
import StatusBagde from "./statusBagde";
import { itemInfo, orderStatus } from "./data";
import ItemInfoCard from "./itemInfoCard";
import { accountStore } from "../../../store";
import { useSnapshot } from "valtio";

const Details = () => {
  const navigate = useNavigate();
  const { selectedOrderItem } = useSnapshot(accountStore);

  useEffect(() => {
    accountStore.selectedOrderItem = itemInfo[0];
  }, []);

  const handleGoBack = () => navigate(`/account`);

  const handleClick = (item) => {
    accountStore.selectedOrderItem = item;
  };

  return (
    <Container>
      <PriceBox>
        <TitleWrapper onClick={handleGoBack}>
          <CaretLeft />
          <Title>Order details</Title>
        </TitleWrapper>
        <PContentWrapper>
          <Entry>
            <OrderNumber>Order ORD-TT2354</OrderNumber>
            <StatusBagde status={orderStatus.inTransit} />
          </Entry>
          <Entry>
            <EntryTxt>Quantity</EntryTxt>
            <EntryTxt>x2</EntryTxt>
          </Entry>
          <Entry>
            <EntryTxt>Place on:</EntryTxt>
            <EntryTxt>Jan 12, 2024 - 3:45pm</EntryTxt>
          </Entry>
          <Entry>
            <EntryTxt>Total Amount:</EntryTxt>
            <PriceTxt>₦75,000.00</PriceTxt>
          </Entry>
        </PContentWrapper>
      </PriceBox>
      <ItemInfoBox>
        <BoxTitle>Item Information</BoxTitle>
        {itemInfo.map((item) => (
          <ItemInfoCard
            key={item?.id}
            item={item}
            handleClick={() => handleClick(item)}
            isSelected={selectedOrderItem?.id === item?.id}
          />
        ))}
      </ItemInfoBox>
      <PaymentInfoBox>
        <BoxTitle>Payment Information</BoxTitle>
        <PaymentInfoContentWrapper>
          <DebitTxt> Debit card</DebitTxt>
          <CardWrapper>
            <Visa />
            <CardDigits>*** *** *** 3456</CardDigits>
          </CardWrapper>
        </PaymentInfoContentWrapper>
      </PaymentInfoBox>
      <DeliveryInfoBox>
        <BoxTitle>Delivery Information</BoxTitle>
        <DeliveryInfoContentWrapper>
          <Entry>
            <DeliveryLabel>Date:</DeliveryLabel>
            <DeliveryValue>Jan 15,2024 - 10:45am</DeliveryValue>
          </Entry>
          <Entry>
            <DeliveryLabel>Address:</DeliveryLabel>
            <DeliveryValue>
              Centenary city, kilometer 7, Enugu/port Harcourt, Expressway,
              Enugu
            </DeliveryValue>
          </Entry>
        </DeliveryInfoContentWrapper>
        <GButton label={"Buy again"} width={"80%"} />
      </DeliveryInfoBox>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 50%;
  padding-left: 5vw;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 80px 42px 0;
  border-bottom: 1px solid #ececee;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -16px;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 4px;
  }
`;

const Title = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

const OrderNumber = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */
`;

const EntryTxt = styled.p`
  display: flex;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
`;

const PriceTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
`;

const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 80px 32px 0;
  border-bottom: 1px solid #ececee;
`;

const BoxTitle = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const PaymentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 32px 80px 32px 0;
  border-bottom: 1px solid #ececee;
`;

const PaymentInfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DebitTxt = styled.p`
  color: var(--Black-100, #b6b6b6);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > svg {
    width: 40px;
    height: 27px;
    flex-shrink: 0;
  }
`;

const CardDigits = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const DeliveryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 32px 80px 32px 0;
`;

const DeliveryInfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 100px;
`;

const DeliveryLabel = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const DeliveryValue = styled.p`
  color: var(--Black-500, #151515);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  width: 50%;
`;
