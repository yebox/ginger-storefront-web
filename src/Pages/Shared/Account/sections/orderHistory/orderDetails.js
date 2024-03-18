import React from "react";
import { styled } from "styled-components";
import Details from "./components/details";
import RateProduct from "./components/rateProduct";
import OrderTracking from "./components/orderTracking";
import {
  devices,
  formatOrderStatus,
  orderStatusMapping,
} from "../../../../../Utils";
import { useApiGet } from "../../../../../Hooks";
import { getSingleOrder } from "../../../../../Urls";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  // const isCompleted =
  //   formatOrderStatus(data?.status) === orderStatusMapping.completed;
  const isCompleted = true;

  const { data, isLoading, isError } = useApiGet(
    "get-single-order",
    () => getSingleOrder(id),
    {
      select: (data) => data,
      onError: (error) => console.log(error),
      enabled: !!id,
    }
  );
  return (
    <Container>
      <Details data={data} />
      {isCompleted ? <RateProduct orderId={id} /> : <OrderTracking />}
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
