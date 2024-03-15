import React from "react";
import { styled } from "styled-components";
import Details from "./components/details";
import RateProduct from "./components/rateProduct";
import OrderTracking from "./components/orderTracking";
import { devices } from "../../../../../Utils";

const OrderDetails = () => {
  const isCompleted = true;
  return (
    <Container>
      <Details />
      {isCompleted ? <RateProduct /> : <OrderTracking />}
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
  display: flex;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;
