import React from "react";
import { styled } from "styled-components";
import { GRatingIcon } from "../../../../../../Ui_elements";
import { devices } from "../../../../../../Utils";

const UserReview = ({ review, rating, name }) => {
  return (
    <Container>
      <Flex>
        <Title>
          Your Rating of <span>{name}</span>
        </Title>
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
        <ReviewTxt>{review}</ReviewTxt>
      </Flex>
    </Container>
  );
};

export default UserReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media ${devices.mobileL} {
    gap: 8px;
  }
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */

  @media ${devices.mobileL} {
    font-size: 15px;

    & > span {
      font-size: 16px;
    }
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${devices.mobileL} {
    gap: 20px;
  }
`;

const ReviewTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-bottom: 100px;

  @media ${devices.mobileL} {
    font-size: 15px;
  }
`;
