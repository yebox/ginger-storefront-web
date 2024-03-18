import React from "react";
import { styled } from "styled-components";
import { GRatingIcon } from "../../../../../../Ui_elements";

const UserReview = ({ review, rating }) => {
  return (
    <Container>
      <Flex>
        <Title>Your Rating</Title>
        <RatingWrapper>
          {[...Array(5)].map((_, index) => (
            <GRatingIcon
              key={index}
              size={`24px`}
              isClickable={false}
              iconIndex={index}
              isChecked={rating > index}
            />
          ))}
        </RatingWrapper>
      </Flex>
      <Flex>
        <Title>Your Review</Title>
        <ReviewTxt>{review}</ReviewTxt>
      </Flex>
    </Container>
  );
};

export default UserReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ReviewTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-bottom: 100px;
`;
