import React from "react";
import { styled } from "styled-components";
import { reviews } from "./data";
import Review from "./review";
import { GButton } from "../../../../Ui_elements";

const ReviewSection = () => {
  return (
    <Container>
      <Title>Customer Reviews</Title>
      <ReviewWrapper>
        {reviews.map((review, idx) => (
          <Review {...review} key={idx} />
        ))}
      </ReviewWrapper>
      <GButton label={"See more"} outline width={"172px"} />
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
`;

const Title = styled.div`
  color: var(--Black-500, #151515);
  text-align: center;
  font-family: "Roboto Serif";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`;

const ReviewWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 60px 0;
`;
