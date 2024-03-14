import React from "react";
import { styled } from "styled-components";
import { Star } from "@mui/icons-material";
import { devices } from "../../../../../../Utils";
import { useDeviceCheck } from "../../../../../../Hooks";

const ItemInfoCard = ({ item, isSelected, handleClick }) => {
  const { name, seller, price } = item;
  const { isMobile } = useDeviceCheck();

  return (
    <Container $isSelected={isSelected} onClick={() => handleClick(item)}>
      <LeftWrapper>
        <ItemImage
          src={
            "https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <DetailsWrapper>
          {!isMobile && (
            <SellerName>
              Seller: <span>{seller}</span>
            </SellerName>
          )}
          <ItemName>{name}</ItemName>
          <RRPContainer>
            <RRPPriceTxt>{price}</RRPPriceTxt>
          </RRPContainer>
          {isMobile && (
            <SellerName>
              Seller: <span>{seller}</span>
            </SellerName>
          )}
        </DetailsWrapper>
      </LeftWrapper>
      <RatingWrapper>
        <Rating>4.5</Rating>
        <Star color="#151515" />
      </RatingWrapper>
    </Container>
  );
};

export default ItemInfoCard;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  padding: 8px 10px;
  border: ${({ $isSelected }) =>
    $isSelected ? `1px solid #FF4623` : `1px solid #E8E8E8`};
  cursor: pointer;
  transition: all 0.25s ease;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 13px;

  @media ${devices.mobileL} {
    flex-direction: column;
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media ${devices.mobileL} {
    gap: 7px;
  }
`;

const SellerName = styled.p`
  color: var(--Black-100, #b6b6b6);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */

  & > span {
    color: var(--Black-300, #626262);
  }
`;

const ItemName = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 26.4px */
  width: 80%;

  @media ${devices.mobileL} {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
  }
`;

const RRPContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const RRPPriceTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-left: 5px;

  @media ${devices.mobileL} {
    font-weight: 500;
  }
`;

const ItemImage = styled.img`
  width: 116px;
  height: 116px;
  flex-shrink: 0;
  object-fit: cover;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const RatingWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 3px;

  & > svg {
    width: 18px;
    height: 18px;
    margin-top: -1px;
  }

  @media ${devices.mobileL} {
    top: unset;
    bottom: 8px;
  }
`;

const Rating = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;
