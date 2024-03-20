import React from "react";
import { styled } from "styled-components";
import { reviews } from "./data";
import Review from "./review";
import { GButton } from "../../../../Ui_elements";
import { devices } from "../../../../Utils";
import { getProductReviews } from "../../../../Urls/productReviews";
import { useLocation } from "react-router-dom";
import { useApiGet } from "../../../../Hooks/api";

const ReviewSection = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();

  const { data, isLoading, error } = useApiGet(
    ["get-product-reviews"],
    () => getProductReviews(id),
    {
      select: (data) => data,
      onError: (error) => console.log(error),
      enabled: !!id,
    }
  );

  return (
    <Container>
      <Title>Customer Reviews</Title>
      {data?.length > 0 ? (
        <ReviewWrapper>
          {data.map((review, idx) => (
            <Review {...review} key={idx} />
          ))}
        </ReviewWrapper>
      ) : (
        <EmptyReview>There are no reviews yet</EmptyReview>
      )}
      {/* <GButton label={"See more"} outline width={"172px"} mbWidth={`50%`} /> */}
    </Container>
  );
};

export default ReviewSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  margin-top: 130px;

  @media ${devices.mobileL} {
    padding: 20px;
    margin-top: 80px;
  }
`;

const Title = styled.div`
  color: var(--Black-500, #151515);
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

  @media ${devices.mobileL} {
    font-size: 22px;
  }
`;

const ReviewWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 60px 0;

  @media ${devices.mobileL} {
    margin: 30px 0 50px;
  }
`;

const EmptyReview = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 30px 0 25px;
`;
