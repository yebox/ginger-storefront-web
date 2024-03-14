import styled from "styled-components";
import { DollarShield, Heart, LockIcon, Star } from "../../Assets/Svgs";
import { GButton } from "../Button/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { devices } from "../../Utils";
import { setSelectedProductName } from "../../Redux/Reducers";

export const Product = ({ width, mbWidth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);

  const handleClick = () => {
    dispatch(
      setSelectedProductName("Nairobi Wrapp-It Shine Foaming Lotion 8oz")
    );
    navigate("/categories/hair/65f042c549924a4381145822");
  };

  return (
    <Container $width={width} $mbWidth={mbWidth}>
      <ImgContainer onClick={handleClick}>
        <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div>
          <Heart />
        </div>
      </ImgContainer>

      <SellerRate>
        <div>
          <p>Seller:</p>
          <Link to="/shopname">Rosalind</Link>
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

      {user ? (
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

  @media ${devices.mobileL} {
    width: ${({ $width, $mbWidth }) => ($mbWidth ? $mbWidth : $width)};
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
    p {
      font-size: 14px;
      color: var(--Black-100, #b6b6b6);
      font-weight: 400;
    }

    a {
      font-size: 14px;
      color: var(--Black-100, #626262);
      font-weight: 400;
    }
  }

  @media ${devices.mobileL} {
    div {
      gap: 3px;
    }
    div:nth-child(1) {
      p,
      a {
        font-size: 10px;
      }
    }

    div:nth-child(2) {
      p {
        font-size: 10px;
      }

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

const Itemdetail = styled.div`
  margin-top: 0.6rem;
  p {
    font-size: 1.2rem;
    color: var(--Black-500, #151515);
  }

  @media ${devices.mobileL} {
    p {
      font-size: 16px;
    }
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

  & > div {
    margin: 0;

    p {
      font-size: 12px;
    }

    svg {
      width: 12px;
      height: 14px;
    }
  }
`;

const Price = styled.h6`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.6rem;

  @media ${devices.mobileL} {
    font-size: 18px;
    margin-bottom: 1rem;
  }
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

  @media ${devices.mobileL} {
    img {
      height: 214px;
    }

    & > div {
      width: 32px;
      height: 32px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
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

  @media ${devices.mobileL} {
    p {
      font-size: 16px;
    }

    div {
      width: 16px;
      height: 16px;
    }
  }
`;
