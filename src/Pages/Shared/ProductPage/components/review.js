import React from "react";
import { styled } from "styled-components";
import { GRatingIcon } from "../../../../Ui_elements";
import { Helpful } from "../../../../Assets/Svgs";

const Review = ({ rating, time, review, helpfulCount }) => {
  return (
    <Container>
      <RatingWrapper>
        {[...Array(5)].map((_, index) => (
          <GRatingIcon key={index} isChecked={rating > index} />
        ))}
      </RatingWrapper>
      <Period>{time}</Period>
      <ReviewTxt>{review}</ReviewTxt>
      <HelpfulWrapper>
        <Helpful />
        <HelpfulTxt>
          Helpful <span>{`(${helpfulCount})`}</span>
        </HelpfulTxt>
      </HelpfulWrapper>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: fit-content;
  border-radius: 8px;
  border: 1px solid #eee;
  background: #fcfcfc;
  padding: 30px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Period = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  margin-top: 5px;
  opacity: 0.8;
`;

const ReviewTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-top: 12px;
`;

const HelpfulWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
`;

const HelpfulTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */

  & > span {
    color: var(--Primary-500, #ff4623);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;
