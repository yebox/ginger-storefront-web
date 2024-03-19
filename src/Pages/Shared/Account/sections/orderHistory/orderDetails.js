import React, { useEffect, useState } from "react";
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
import { LineLoader } from "../../../../../Ui_elements";
import CancelledDetail from "./components/cancelledDetail";

const OrderDetails = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const [isRendering, setIsRendering] = useState(true);

  const { data, isLoading } = useApiGet(
    "get-single-order",
    () => getSingleOrder(id),
    {
      select: (data) => data,
      onError: (error) => console.log(error),
      enabled: !!id,
    }
  );

  useEffect(() => {
    setTimeout(() => {
      setIsRendering(false);
    }, 1200);
  }, []);

  const status = formatOrderStatus(data?.status);
  const isCompleted = status === orderStatusMapping.completed;
  const isCancelled = status === orderStatusMapping.cancelled;

  console.log(isCompleted, formatOrderStatus(data?.status), data?.status);
  return (
    <Container>
      <Details data={data} />
      {isCompleted ? (
        <RateProduct orderId={id} />
      ) : isCancelled ? (
        <CancelledDetail />
      ) : (
        <OrderTracking status={status} orderId={id} />
      )}
      <LineLoader loading={isRendering || isLoading} />
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
