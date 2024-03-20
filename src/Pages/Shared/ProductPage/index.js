import React, { useEffect } from "react";
import { styled } from "styled-components";
import ProductSection from "./components/productSection";
import ReviewSection from "./components/reviewSection";
import { BecomeSellerSection, FeaturedItems, InstaFooter } from "../Components";
import { GSpacer } from "../../../Ui_elements";
import { useApiGet } from "../../../Hooks/api";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProductName } from "../../../Redux/Reducers";
import { getProductDetails } from "../../../Urls";

const ProductPage = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useApiGet(
    ["get-product-details", id],
    () => getProductDetails(id),
    {
      select: (data) => data,
      onError: (error) => console.log(error),
      enabled: !!id,
    }
  );

  useEffect(() => {
    dispatch(setSelectedProductName(data?.name));

    return () => {
      dispatch(setSelectedProductName(""));
    };
  }, [dispatch, data]);

  return (
    <Container>
      <ProductSection data={data} isLoading={isLoading} />
      <ReviewSection />
      <FeaturedItems />
      <GSpacer size={140} mbSize={90} />
      <BecomeSellerSection />
      <GSpacer size={270} mbSize={160} />
      <InstaFooter />
    </Container>
  );
};

export default ProductPage;

const Container = styled.div``;
