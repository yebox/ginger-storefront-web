import React from "react";
import { styled } from "styled-components";
import { GRatingIcon } from "../../../../Ui_elements";
import { Helpful } from "../../../../Assets/Svgs";
import { devices } from "../../../../Utils";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Review = ({ rating, createdAt, review, helpfulCount }) => {
  return (
    <Container>
      <RatingWrapper>
        {[...Array(5)].map((_, index) => (
          <GRatingIcon key={index} isChecked={rating > index} />
        ))}
      </RatingWrapper>
      <Period>{dayjs(createdAt).fromNow()}</Period>
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

  @media ${devices.mobileL} {
    width: 100%;
    padding: 20px;
  }
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
  margin-top: 10px;
  opacity: 0.8;

  @media ${devices.mobileL} {
    font-size: 10px;
  }
`;

const ReviewTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-top: 12px;

  @media ${devices.mobileL} {
    font-size: 13px;
  }
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

  @media ${devices.mobileL} {
    font-size: 12px;

    & > span {
      font-size: 12px;
    }
  }
`;
