import React from "react";
import { styled } from "styled-components";
import ProductSection from "./components/productSection";
import ReviewSection from "./components/reviewSection";
import { BecomeSellerSection, FeaturedItems, InstaFooter } from "../Components";
import { GSpacer } from "../../../Ui_elements";

const ProductPage = () => {
  return (
    <Container>
      <ProductSection />
      <ReviewSection />
      <FeaturedItems />
      <GSpacer size={140} />
      <BecomeSellerSection />
      <GSpacer size={270} />
      <InstaFooter />
    </Container>
  );
};

export default ProductPage;

const Container = styled.div``;