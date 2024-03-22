import React from "react";
import { styled } from "styled-components";
import { devices, formatAmount, formatImage } from "../../../../../../Utils";
import { useDeviceCheck } from "../../../../../../Hooks";
import { GButton } from "../../../../../../Ui_elements";

const ItemInfoCard = ({ item, isSelected, handleClick }) => {
  const product = item?.product;
  const { isMobile } = useDeviceCheck();
  const seller = `${product?.seller?.firstName} ${product?.seller?.lastName}`;

  return (
    <Container
      $isSelected={isSelected}
      onClick={() => (isMobile ? () => {} : handleClick(item))}
    >
      <LeftWrapper>
        <ItemImage src={formatImage(product?.mainImage)} />
        <DetailsWrapper>
          {!isMobile && (
            <SellerName>
              Seller: <span>{seller}</span>
            </SellerName>
          )}
          <ItemName>{product?.name}</ItemName>
          <RRPContainer>
            <RRPPriceTxt>{`₦${formatAmount(product?.price)}`}</RRPPriceTxt>
          </RRPContainer>
          {isMobile && (
            <SellerName>
              Seller: <span>{seller}</span>
            </SellerName>
          )}
        </DetailsWrapper>
        {isMobile && (
          <GButton label={`Review product`} onClick={() => handleClick(item)} />
        )}
      </LeftWrapper>
      <QuantityWrapper $isMobile={isMobile}>
        <Quantity>x {item?.quantity}</Quantity>
      </QuantityWrapper>
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

  @media ${devices.mobileL} {
    padding: 10px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 13px;
  width: 83%;

  @media ${devices.mobileL} {
    flex-direction: column;
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 74%;

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
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  width: 80%;
  opacity: 0.9;

  @media ${devices.mobileL} {
    width: 100%;
    font-size: 16px;
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
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 25.2px */
  /* margin-left: 5px; */

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

const QuantityWrapper = styled.div`
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
    right: 10px;
    bottom: ${({ $isMobile }) => ($isMobile ? `62px` : `8px`)};
  }
`;

const Quantity = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;
