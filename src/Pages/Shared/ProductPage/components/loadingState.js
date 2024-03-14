import { Skeleton } from "@mui/material";
import React from "react";
import {
  Container,
  ContentWrapper,
  DetailsWrapper,
  EntryWrapper,
  ImagesWrapper,
  MoreImagesWrapper,
} from "./productSection";
import { styled } from "styled-components";
import { devices } from "../../../../Utils";

const ProductPageLoading = () => {
  return (
    <Container>
      <BreadCrumb variant="rectangular" width={400} height={25} />
      <ContentWrapper>
        <ImagesWrapper>
          <Skeleton variant="rectangular" width={`100%`} height={550} />
          <MoreImagesWrapper>
            <Skeleton variant="rectangular" width={`100%`} height={140} />
            <Skeleton variant="rectangular" width={`100%`} height={140} />
            <Skeleton variant="rectangular" width={`100%`} height={140} />
            <Skeleton variant="rectangular" width={`100%`} height={140} />
          </MoreImagesWrapper>
        </ImagesWrapper>
        <DetailsWrapper>
          <Seller variant="text" sx={{ fontSize: "16px" }} />
          <Skeleton variant="text" sx={{ fontSize: "82px" }} />
          <Skeleton variant="text" sx={{ fontSize: "16px" }} />
          <EntryWrapper>
            <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            <Skeleton variant="rectangular" width={`100%`} height={175} />
          </EntryWrapper>
          <EntryWrapper>
            <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            <Skeleton variant="rectangular" width={`100%`} height={45} />
          </EntryWrapper>
          <EntryWrapper>
            <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            <Skeleton variant="rectangular" width={`100%`} height={45} />
          </EntryWrapper>
          <EntryWrapper>
            <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            <Skeleton variant="rectangular" width={`100%`} height={45} />
          </EntryWrapper>
        </DetailsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default ProductPageLoading;

const BreadCrumb = styled(Skeleton)`
  @media ${devices.mobileL} {
    width: 100% !important;
    height: 43px !important;
  }
`;

const Seller = styled(Skeleton)`
  margin-bottom: 30px;
`;
