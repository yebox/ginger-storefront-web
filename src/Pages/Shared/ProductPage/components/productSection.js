import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { GFavoriteIcon, GBreadCrumbs, Carousel } from "../../../../Ui_elements";
import QuantityCounter from "./quantityCounter";
import { LeftArrow, RightArrow } from "../../../../Assets/Svgs";
import { devices, formatImage } from "../../../../Utils";
import ProductPageLoading from "./loadingState";

const ProductSection = ({ data, isLoading }) => {
  const [activeIdx, setActiveIdx] = useState(1);
  const [mainImg, setMainImg] = useState("");
  const sliderRef = useRef(null);
  const showArrows = data?.images?.length > 4;

  useEffect(() => {
    const mainImage = formatImage(data?.mainImage);
    setMainImg(mainImage);
  }, [data]);

  const slideNext = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  if (isLoading) return <ProductPageLoading />;

  return (
    <Container>
      <GBreadCrumbs />
      <ContentWrapper>
        <ImagesWrapper>
          <MainImg src={mainImg} />
          <MoreImagesWrapper>
            {showArrows && (
              <ArrowCircle $pos={"left"}>
                <LeftArrow onClick={slidePrev} />
              </ArrowCircle>
            )}
            <Carousel
              data={data?.images?.map((x) => formatImage(x))}
              ref={sliderRef}
              width={"100%"}
              renderCard={(item, index) => {
                return (
                  <ImageBox
                    key={index}
                    src={item}
                    onClick={() => setMainImg(item)}
                  />
                );
              }}
            />
            {showArrows && (
              <ArrowCircle $pos={"right"}>
                <RightArrow onClick={slideNext} />
              </ArrowCircle>
            )}
          </MoreImagesWrapper>
        </ImagesWrapper>
        <DetailsWrapper>
          <Seller>
            Seller: <span>KeraCare</span>
          </Seller>
          <Title>White tea deep conditioner</Title>
          <Collection>White tea hair collections</Collection>
          <EntryWrapper>
            <EntryTitle>Description</EntryTitle>
            <Description>
              Replenish and smooth skin with our conditioning lotion, formulated
              with an antioxidant-rich blend of vitamins C and E.Sunflower, Rose
              Hip, Jojoba, Babasu and Sesame Oils deeply moisturize as
              nourishing Aloe and Oat Extract naturally soothe the skin. <br />
              <br />
              Replenish and smooth skin with our conditioning lotion, formulated
              with an antioxidant-rich blend of vitamins C and E.Sunflower, Rose
              Hip, Jojoba, Babasu and Sesame Oils deeply moisturize as
              nourishing Aloe and Oat Extract naturally soothe the skin.
            </Description>
          </EntryWrapper>
          <EntryWrapper>
            <EntryTitle>Size</EntryTitle>
            <SizeTabsWrapper>
              <SizeTab
                onClick={() => setActiveIdx(1)}
                $active={activeIdx === 1}
              >
                12Floz (276ml)
              </SizeTab>
              <SizeTab
                onClick={() => setActiveIdx(2)}
                $active={activeIdx === 2}
              >
                16Floz (512ml)
              </SizeTab>
            </SizeTabsWrapper>
          </EntryWrapper>
          <EntryWrapper>
            <EntryTitle>
              Quantity <span>(MOQ)</span>
            </EntryTitle>
            <QuantityItemWrapper>
              <QuantityCounter />
              <FavoriteBox>
                <GFavoriteIcon />
              </FavoriteBox>
            </QuantityItemWrapper>
          </EntryWrapper>
          <EntryWrapper>
            <EntryTitle>Price</EntryTitle>
            <PriceValue>{`₦${data?.price || 0}`}</PriceValue>
          </EntryWrapper>
        </DetailsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default ProductSection;

export const Container = styled.div`
  padding: 35px 5% 0;

  @media ${devices.mobileL} {
    padding: 30px 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 70px;
  margin-top: 30px;

  @media ${devices.mobileL} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImagesWrapper = styled.div`
  width: 45%;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const MoreImagesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  overflow: hidden;
  margin-top: 25px;

  @media ${devices.mobileL} {
    gap: 8px;
    margin-top: 15px;
  }
`;

const ArrowCircle = styled.div`
  position: absolute;
  top: 40px;
  left: ${({ $pos }) => ($pos === "left" ? `10px` : `unset`)};
  right: ${({ $pos }) => ($pos === "right" ? `10px` : `unset`)};
  display: flex;
  width: 62.719px;
  height: 62.719px;
  padding: 19px 18.719px 19.719px 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 31.359px;
  border: 1px solid #fafafa;
  background: #fafafa;
  z-index: 5;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  @media ${devices.mobileL} {
    width: 30px;
    height: 30px;
    padding: 18px;
    top: 24px;
    left: ${({ $pos }) => ($pos === "left" ? `5px` : `unset`)};
    right: ${({ $pos }) => ($pos === "right" ? `5px` : `unset`)};

    & > svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const ImageBox = styled.img`
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  border-radius: 2px;
  object-fit: cover;
  cursor: pointer;

  @media ${devices.mobileL} {
    height: 85px;
  }
`;

const MainImg = styled.img`
  height: 550px;
  width: 100%;
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
  transition: all 0.25s ease;

  @media ${devices.mobileL} {
    height: 300px;
  }
`;

export const DetailsWrapper = styled.div`
  padding-top: 5px;
  width: 48%;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const Seller = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-bottom: 30px;

  & > span {
    text-decoration: underline;
  }

  @media ${devices.mobileL} {
    margin-bottom: 20px;
  }
`;

const Title = styled.p`
  color: #000;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 40.8px */
  margin-bottom: 10px;
  width: 55%;

  @media ${devices.mobileL} {
    font-size: 28px;
    width: 85%;
  }
`;

const Collection = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-bottom: 20px;
`;

export const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

  @media ${devices.mobileL} {
    gap: 15px;
  }
`;

const EntryTitle = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  & > span {
    color: var(--Primary-500, #ff4623);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
`;

const Description = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

const SizeTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media ${devices.mobileL} {
    gap: 15px;
  }
`;

const SizeTab = styled.div`
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: ${({ $active }) =>
    $active ? `none` : `1px solid var(--Black-300, #626262)`};

  background: ${({ $active }) =>
    $active
      ? `var(
    --Black-500,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #151515
  )`
      : `transparent`};
  color: ${({ $active }) =>
    $active ? `var(--White, #fefefe)` : `var(--Black-300, #626262)`};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  transition: all 0.25s ease;
  cursor: pointer;
`;

const QuantityItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const FavoriteBox = styled.div`
  display: flex;
  width: 70px;
  height: 52px;
  padding: 14px 23px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 7px;
  border: 0.917px solid var(--Black-300, #626262);

  @media ${devices.mobileL} {
    width: 60px;
  }
`;

const PriceValue = styled.p`
  color: var(--Black-500, #151515);
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media ${devices.mobileL} {
    font-size: 28px;
  }
`;
