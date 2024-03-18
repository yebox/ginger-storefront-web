import React, { useEffect } from "react";
import { styled } from "styled-components";
import { CaretLeft } from "../../../../../../Assets/Svgs";
import { GButton } from "../../../../../../Ui_elements";
import { useNavigate } from "react-router-dom";
import StatusBagde from "./statusBagde";
import ItemInfoCard from "./itemInfoCard";
import {
  devices,
  formatAddress,
  formatAmount,
  formatOrderStatus,
  orderStatusMapping,
} from "../../../../../../Utils";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedOrderItem,
  setSelectedProductName,
} from "../../../../../../Redux/Reducers";
import dayjs from "dayjs";
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const Details = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedOrderItem, categories } = useSelector(
    (state) => state?.global
  );

  useEffect(() => {
    data?.items?.length > 0 && dispatch(setSelectedOrderItem(data?.items[0]));
  }, [data, dispatch]);

  const handleGoBack = () => navigate(`/account/order-history`);

  const handleClick = (item) => {
    dispatch(setSelectedOrderItem(item));
  };

  const orderStatus = formatOrderStatus(data?.status);
  const quantity = data?.items?.reduce(
    (total, item) => total + (item?.quantity || 0),
    0
  );

  const handleBuyAgain = () => {
    const productCategory = categories.find(
      (x) => x.id === selectedOrderItem?.product?.categoryId
    );
    dispatch(setSelectedProductName(selectedOrderItem?.product?.name));
    navigate(
      `/categories/${productCategory?.name}/${selectedOrderItem?.productId}`
    );
  };

  return (
    <Container>
      <PriceBox>
        <TitleWrapper onClick={handleGoBack}>
          <CaretLeft />
          <Title>Order History</Title>
        </TitleWrapper>
        <PContentWrapper>
          <Entry>
            <OrderNumber>Order {data?.reference}</OrderNumber>
            <StatusBagde status={orderStatus} />
          </Entry>
          <Entry>
            <EntryTxt>Quantity</EntryTxt>
            <EntryTxt>x{quantity}</EntryTxt>
          </Entry>
          <Entry>
            <EntryTxt>Placed on:</EntryTxt>
            <EntryTxt>{dayjs(data?.createdAt).format("LLLL")}</EntryTxt>
          </Entry>
          <Entry>
            <EntryTxt>Total Amount:</EntryTxt>
            <PriceTxt>{`₦${formatAmount(data?.price)}`}</PriceTxt>
          </Entry>
        </PContentWrapper>
      </PriceBox>
      <ItemInfoBox>
        <BoxTitle>Item Information</BoxTitle>
        <CardWrapper>
          {data?.items?.map((item) => (
            <ItemInfoCard
              key={item?.productId}
              item={item}
              handleClick={() => handleClick(item)}
              isSelected={selectedOrderItem?.productId === item?.productId}
            />
          ))}
        </CardWrapper>
      </ItemInfoBox>
      {/* <PaymentInfoBox>
        <BoxTitle>Payment Information</BoxTitle>
        <PaymentInfoContentWrapper>
          <DebitTxt> Debit card</DebitTxt>
          <CardWrapper>
            <Visa />
            <CardDigits>*** *** *** 3456</CardDigits>
          </CardWrapper>
        </PaymentInfoContentWrapper>
      </PaymentInfoBox> */}
      {data?.dateDelivered && (
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
                {formatAddress(data?.deliveryAddress)}
              </DeliveryValue>
            </Entry>
          </DeliveryInfoContentWrapper>
          <GButton label={"Buy again"} width={"80%"} />
        </DeliveryInfoBox>
      )}
      {/* {orderStatus === orderStatusMapping.completed && ( */}
      <BtnWrapper>
        <GButton label={`Buy again`} width={`70%`} onClick={handleBuyAgain} />
      </BtnWrapper>
      {/* )} */}
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 50%;
  padding-left: 5vw;

  @media ${devices.mobileL} {
    width: 100%;
    padding-left: unset;
  }
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 80px 42px 0;
  border-bottom: 1px solid #ececee;

  @media ${devices.mobileL} {
    padding: 20px;
  }
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

  @media ${devices.mobileL} {
    font-size: 20px;
  }
`;

const OrderNumber = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */

  @media ${devices.mobileL} {
    font-size: 16px;
  }
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

  @media ${devices.mobileL} {
    margin-top: 40px;
    gap: 22px;
  }
`;

const PriceTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */

  @media ${devices.mobileL} {
    font-size: 18px;
  }
`;

const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 80px 32px 0;
  border-bottom: 1px solid #ececee;

  @media ${devices.mobileL} {
    padding: 20px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 7px;
  max-height: 320px;
  overflow-y: scroll;
`;

const BoxTitle = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

// const PaymentInfoBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 35px;
//   padding: 32px 80px 32px 0;
//   border-bottom: 1px solid #ececee;
// `;

// const PaymentInfoContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// const DebitTxt = styled.p`
//   color: var(--Black-100, #b6b6b6);
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%; /* 19.6px */
// `;

// const CardWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   & > svg {
//     width: 40px;
//     height: 27px;
//     flex-shrink: 0;
//   }
// `;

// const CardDigits = styled.p`
//   color: var(--Black-300, #626262);
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%; /* 19.6px */
// `;

const DeliveryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 32px 80px 32px 0;

  @media ${devices.mobileL} {
    padding: 20px;
  }
`;

const DeliveryInfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 100px;

  @media ${devices.mobileL} {
    margin-bottom: 20px;
  }
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

const BtnWrapper = styled.div`
  padding: 60px 80px 32px 0;

  @media ${devices.mobileL} {
    padding: 20px;
  }
`;
