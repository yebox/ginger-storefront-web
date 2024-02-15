import styled from "styled-components";
import { DollarShield, Heart, LockIcon, Star } from "../../Assets/Svgs";
import { GButton } from "../Button/button";
import { useNavigate } from "react-router-dom";

export const Product = ({ width }) => {
  const navigate = useNavigate();

  const isUser = false;
  return (
    <Container $width={width} onClick={() => navigate("/product/1")}>
      <ImgContainer>
        <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div>
          <Heart />
        </div>
      </ImgContainer>

      <SellerRate>
        <div>
          <p>Seller:</p>
          <p>Rosalind</p>
        </div>

        <div>
          <p>4.5</p>
          <Star />
        </div>
      </SellerRate>
      <Itemdetail>
        <p>Nairobi Wrapp-It Shine Foaming Lotion 8oz</p>
      </Itemdetail>
      <RRPContainer>
        <div>
          <DollarShield />
          <p>MSRP</p>
        </div>
        <p>₦5,500</p>
      </RRPContainer>

      {isUser ? (
        <>
          <Price>₦87,260</Price>
          <GButton label={"Add to Cart"} />
        </>
      ) : (
        <UnAuthPrice>
          <div>
            <LockIcon />
          </div>
          <p>₦87,260</p>
        </UnAuthPrice>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: ${({ $width }) => ($width ? $width : "17.8rem")};
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: inherit;
    height: 16rem;
    object-fit: cover;
  }
`;

const SellerRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    p {
      font-weight: 300;
    }
  }

  div:nth-child(1) {
    p:nth-child(1) {
      font-size: 14px;
      color: var(--gray-300);
      font-weight: lighter;
    }
  }
`;

const Itemdetail = styled.div`
  margin-top: 0.6rem;
  p {
    font-size: 1.2rem;
  }
`;

const RRPContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin: 0.6rem 0;

  p {
    font-size: 14px;
  }
  > div {
    display: flex;
    width: fit-content;
    gap: 3px;
    align-items: center;
    margin: 0.6rem 0;
    > div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
`;

const Price = styled.h6`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.6rem;
`;
const ImgContainer = styled.div`
  background-color: aliceblue;
  position: relative;
  div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }
`;

const UnAuthPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid var(--gray-200);
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    filter: blur(5px);
  }
`;
