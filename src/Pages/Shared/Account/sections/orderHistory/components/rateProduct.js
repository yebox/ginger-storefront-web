import React, { useState } from "react";
import { styled } from "styled-components";
import {
  InfoIcon,
  OrderRateIcon,
  OrderTrackStar,
  SuccessIcon,
} from "../../../../../../Assets/Svgs";
import {
  GButton,
  GRatingIcon,
  GTextField,
} from "../../../../../../Ui_elements";
import { useNavigate } from "react-router-dom";

const RateProduct = () => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <OrderTrackStar />
        <HeaderContent>
          <HeaderTitle>We value your input</HeaderTitle>
          <HeaderDescription>
            Please leave a review and rate this item or services
          </HeaderDescription>
        </HeaderContent>
        <OrderRateIcon />
      </Header>
      {isSubmitted ? (
        <SubmittedWrapper>
          <SuccessIcon />
          <SubmitMainTxt>Thank you for the review!</SubmitMainTxt>
          <SubmitSubTxt>
            Happy <span>Ginger</span> shopping
          </SubmitSubTxt>
        </SubmittedWrapper>
      ) : (
        <ContentWrapper>
          <RateTxt>How would you rate this product</RateTxt>
          <RatingWrapper>
            {[...Array(5)].map((_, index) => (
              <GRatingIcon
                key={index}
                size={`32px`}
                isClickable={true}
                onClick={setCheckedCount}
                iconIndex={index}
                isChecked={checkedCount > index}
              />
            ))}
          </RatingWrapper>
          <ReviewWrapper>
            <GTextField
              id="review"
              placeholder="Leave us a review"
              inputType="text"
              name="review"
            />
            <GButton
              label={`Submit`}
              width={`155px`}
              onClick={() => setIsSubmitted(true)}
            />
          </ReviewWrapper>
          <ReportWrapper>
            <InfoIcon />
            <ReportContent>
              <ReportTitle>Have an issue with this product?</ReportTitle>
              <ReportDesc>
                Should you encounter an issue with the item on arrival and wish
                to request a refund, you can easily report this issue and submit
                all necessary information to help us resolve your issue.
              </ReportDesc>
              <GButton
                label={`Report issue`}
                width={`98px`}
                fontsize={`12px`}
                paddingProp={`8px 16px`}
                onClick={() => navigate("/report/1")}
              />
            </ReportContent>
          </ReportWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default RateProduct;

const Container = styled.div`
  width: 50%;
  border-left: 1px solid #ececee;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 206px;
  background: #fffbf6;
  padding: 30px 5vw 30px 65px;

  & > svg:first-of-type {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 9px;
`;

const HeaderTitle = styled.p`
  color: var(--Black-500, #151515);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 24px */
`;

const HeaderDescription = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  width: 85%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 5vw 57px 65px;
`;

const RateTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  margin-bottom: 16px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 32px 31px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: end;
  margin: 70px 0 100px;
`;

const ReportWrapper = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 8px;
  background: #f6fcfe;
  padding: 21px 80px 21px 26px;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const ReportContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ReportTitle = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const ReportDesc = styled.p`
  color: var(--Black-300, #626262);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
  width: 80%;
  margin-bottom: 9px;
`;

const SubmittedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 100px;
`;

const SubmitMainTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin-top: 20px;
`;
const SubmitSubTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */

  & > span {
    color: var(--Primary-500, #ff4623);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
`;
