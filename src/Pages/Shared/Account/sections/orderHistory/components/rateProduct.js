import React, { useEffect, useState } from "react";
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
import { devices } from "../../../../../../Utils";
import { useDispatch, useSelector } from "react-redux";
import { useApiGet, useApiSend, useDeviceCheck } from "../../../../../../Hooks";
import {
  createProductReview,
  getUserProductReview,
} from "../../../../../../Urls/productReviews";
import { toast } from "react-hot-toast";
import UserReview from "./userReview";
import { setSelectedProductName } from "../../../../../../Redux/Reducers";

const RateProduct = ({ orderId }) => {
  const dispatch = useDispatch();
  const [checkedCount, setCheckedCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { selectedOrderItem, categories } = useSelector(
    (state) => state?.global
  );
  const user = useSelector((state) => state?.user);
  const [review, setReview] = useState("");
  const { isMobile } = useDeviceCheck();

  const {
    data: userReview,
    isLoading,
    error,
  } = useApiGet(
    ["get-user-product-review", selectedOrderItem?.productId],
    () => getUserProductReview(selectedOrderItem?.productId, user?._id),
    {
      select: (data) => data,
      onError: (error) => console.log(error),
      enabled: !!selectedOrderItem?.productId,
    }
  );

  const { mutate, isPending } = useApiSend(
    createProductReview,
    () => {
      setIsSubmitted(true);
    },
    () => {
      toast.error("Something went wrong");
    }
  );

  useEffect(() => {
    setIsSubmitted(false);
    setCheckedCount(0);
    setReview("");
  }, [selectedOrderItem]);

  const handleChange = (value) => {
    setReview(value);
  };

  console.log(review);

  const handleBuyAgain = () => {
    const productCategory = categories.find(
      (x) => x.id === selectedOrderItem?.product?.categoryId
    );
    dispatch(setSelectedProductName(selectedOrderItem?.product?.name));
    navigate(
      `/categories/${productCategory?.name}/${selectedOrderItem?.productId}`
    );
  };

  const onSubmit = () => {
    const body = {
      review,
      rating: checkedCount,
      productId: selectedOrderItem?.productId,
    };
    console.log({ body });
    mutate(body);
  };
  console.log(userReview);

  const reviewLength = userReview?.length;
  const latestreview = reviewLength > 0 && userReview[reviewLength - 1];

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
      <ContentWrapper>
        {isSubmitted ? (
          <SubmittedWrapper>
            <SuccessIcon />
            <SubmitMainTxt>Thank you for the review!</SubmitMainTxt>
            <SubmitSubTxt>
              Happy <span>Ginger</span> shopping
            </SubmitSubTxt>
          </SubmittedWrapper>
        ) : reviewLength > 0 ? (
          <UserReview
            rating={latestreview?.rating}
            review={latestreview?.review}
            name={selectedOrderItem?.product?.name}
          />
        ) : (
          <>
            <RateTxt>
              How would you rate <span>{selectedOrderItem?.product?.name}</span>
            </RateTxt>
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
                value={review}
                name="review"
                onChange={handleChange}
              />
              <GButton
                label={`Submit`}
                isLoading={isPending}
                width={`155px`}
                onClick={onSubmit}
              />
            </ReviewWrapper>
          </>
        )}
        <ReportWrapper>
          <InfoIcon />
          <ReportContent>
            <ReportTitle>Have an issue with this product?</ReportTitle>
            <ReportDesc>
              Should you encounter an issue with the item on arrival and wish to
              request a refund, you can easily report this issue and submit all
              necessary information to help us resolve your issue.
            </ReportDesc>
            <GButton
              label={`Report issue`}
              width={`98px`}
              fontsize={`12px`}
              paddingProp={`8px 16px`}
              onClick={() => navigate(`/report/${orderId}`)}
            />
          </ReportContent>
        </ReportWrapper>
        <BtnWrapper>
          <GButton
            label={`Buy again`}
            width={`70%`}
            mbWidth={`100%`}
            onClick={handleBuyAgain}
          />
        </BtnWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default RateProduct;

const Container = styled.div`
  width: 50%;
  border-left: 1px solid #ececee;

  @media ${devices.mobileL} {
    width: 100%;
  }
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

  @media ${devices.mobileL} {
    padding: 20px;
    height: 135px;
    padding-top: 20px;

    & > svg:first-of-type {
      height: 100%;
    }
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

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 5vw 57px 65px;

  @media ${devices.mobileL} {
    padding: 20px;
  }
`;

const RateTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  margin-bottom: 16px;

  & > span {
    color: #151515;
  }
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

  @media ${devices.mobileL} {
    padding: 20px;
  }

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
  font-size: 12px;
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
  padding-top: 75px;
  margin-bottom: 154px;

  @media ${devices.mobileL} {
    gap: 10px;
    margin-bottom: 80px;
  }
`;

const SubmitMainTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin-top: 20px;

  @media ${devices.mobileL} {
    font-size: 20px;
  }
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

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

const BtnWrapper = styled.div`
  padding: 60px 80px 32px 0;

  @media ${devices.mobileL} {
    padding: 50px 0 0;
  }
`;
