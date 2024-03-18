import React from "react";
import { styled } from "styled-components";
import { Cancel, DiscountBannerVector } from "../../../../Assets/Svgs";
import { GModal } from "../../../../Ui_elements";
import { Link } from "react-router-dom";
import { devices } from "../../../../Utils";

const MoqModal = ({ handleClose, isOpen }) => {
  return (
    <GModal open={isOpen} handleClose={handleClose}>
      <ModalContainer>
        <VectorContainer>
          <DiscountBannerVector />
        </VectorContainer>
        <h5>Minimum Order Quantity</h5>
        <Cancel onClick={handleClose} />

        <ModalItem>
          <h6>Minimum Order Quantity (MOQ) Information</h6>
          <p>
            Please note that this product has a Minimum Order Quantity (MOQ)
            requirement. The MOQ represents the minimum quantity of this product
            that must be purchased in a single order.
          </p>
        </ModalItem>

        <ModalItem>
          <h6>Why is there an MOQ?</h6>
          <p>
            The MOQ is set by the seller to ensure that production and shipping
            costs are optimized. By ordering the minimum quantity, you help
            streamline the production process and reduce overall costs.
          </p>
        </ModalItem>

        <ModalItem>
          <h6>What is the MOQ for this product?</h6>
          <p>
            The MOQ for this product is in multiple of two (2). Please ensure
            that your order meets or exceeds this quantity to proceed with the
            purchase.
          </p>
        </ModalItem>

        <ModalItem>
          <h6>What if I don&apos;t meet the MOQ?</h6>
          <p>
            If your order quantity falls below the MOQ, you may not be able to
            proceed with the purchase. In such cases, we recommend reaching out
            to our customer support team for assistance.
          </p>
        </ModalItem>

        <p>
          Thank you for your understanding and cooperation. If you have further
          questions or concerns regarding the MOQ, please don&apos;t hesitate to{" "}
          <Link>Contact Us</Link>.
        </p>
      </ModalContainer>
    </GModal>
  );
};

export default MoqModal;

const ModalContainer = styled.div`
  overflow-y: auto;
  position: relative;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  h5 {
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 30px;
  }
  a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  & > svg {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
  /* justify-content: center; */
`;

const VectorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalItem = styled.div`
  h6 {
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 20px;
  }
  span {
    font-weight: 500;
  }
`;
