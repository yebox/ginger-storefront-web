import React, { useState, useRef, useEffect, useMemo } from "react";
import { styled } from "styled-components";
import {
  GFavoriteIcon,
  GBreadCrumbs,
  Carousel,
  LineLoader,
  GButton,
  GRadioButtonsGroup,
} from "../../../../Ui_elements";
import QuantityCounter from "./quantityCounter";
import {
  InfoIconWhiteBg,
  LeftArrow,
  RightArrow,
} from "../../../../Assets/Svgs";
import { devices, formatAmount, formatImage } from "../../../../Utils";
import ProductPageLoading from "./loadingState";
import MoqModal from "./moqModal";
import { useApiGet, useApiSend } from "../../../../Hooks";
import {
  addToCart,
  addToWishlist,
  deletItemFromWishlist,
  getCartItems,
  getWishlist,
  removeCartItem,
} from "../../../../Urls";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { VariationDropdown } from "./variationDropdown";
import { colorOptions, purchaseOption, sizeOptions } from "./data";

const ProductSection = ({ data, isLoading }) => {
  const user = useSelector((state) => state.user);
  const [mainImg, setMainImg] = useState("");
  const [quantity, setQuantity] = useState(2);
  const [items, setItems] = useState([]);
  const [label, setLabel] = useState(<Label>Select color</Label>);
  const [sizeOption, setSizeOption] = useState(<Label>Select size</Label>);
  const [isMoqModalOpen, setIsMoqModalOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState(purchaseOption[0].value);
  const maxChars = 140;
  const handleCheck = (e) => {
    setPurchaseType(e.target.value);
  };
  const sliderRef = useRef(null);
  const showArrows = data?.images?.length > 4;
  const isWholeSale = purchaseType === "wholesale";
  const queryClient = useQueryClient();

  useEffect(() => {
    isWholeSale ? setQuantity(2) : setQuantity(1);
  }, [isWholeSale]);

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

  const { data: wishlistData, isLoading: isLoadingWishlist } = useApiGet(
    ["wishlist-data"],
    () => getWishlist(user?._id),
    {
      enabled: true,
      refecthOnWindowFocus: true,
    }
  );

  const { data: cartData, isLoading: isLoadingCartData } = useApiGet(
    ["cart-data"],
    () => getCartItems(user?._id),
    {
      enabled: true,
      refecthOnWindowFocus: true,
    }
  );

  const isWishlist = useMemo(() => {
    if (wishlistData) {
      const result = wishlistData?.items?.some(
        (item) => item?.product?._id === data?._id
      );
      return result;
    }
    return false;
  }, [wishlistData, data]);

  const isCart = useMemo(() => {
    if (cartData) {
      const cartItem = cartData.items?.find(
        (item) => item.product?._id === data?._id
      );
      if (cartItem) {
        return true;
      }
    }
    return false;
  }, [cartData, data]);

  const { mutate, isPending } = useApiSend(
    (_) => addToCart(_, user?._id),
    () => {
      toast.success("Added to cart");
      queryClient.invalidateQueries(["cart-data"]);
    },
    (e) => {
      toast.error("Could not add to cart");
    }
  );

  const { mutate: removeFromCart, isPending: isRemovingFromCart } = useApiSend(
    () => removeCartItem(data?._id, quantity),
    () => {
      toast.success("Removed from cart");
      queryClient.invalidateQueries(["cart-data"]);
    },
    (e) => {
      toast.error("Could not remove from cart");
    }
  );

  const { mutate: addWishlist, isPending: isAddingToWishlist } = useApiSend(
    (_) => addToWishlist(_, user?._id),
    () => {
      toast.success("Item has been added to wishlist successfully.");
      queryClient.invalidateQueries(["wishlist-data"]);
    },
    (e) => {
      toast.error("Could not add to wishlist");
    }
  );

  const { mutate: deleteFromWishlist, isPending: isDeletingItemWishlist } =
    useApiSend(
      () => deletItemFromWishlist(user?._id, data?._id),
      () => {
        toast.success("Item has been removed from wishlist successfully.");
        queryClient.invalidateQueries(["wishlist-data"]);
      },
      (e) => {
        toast.error("Could not remove from wishlist");
      }
    );

  const onLike = () => {
    const singleItem = {
      productId: data?._id,
      quantity: quantity,
    };
    const updatedItems = [singleItem];
    const body = {
      items: updatedItems,
      price: data?.price,
    };
    addWishlist(body);
  };

  const onDeleteFromWishlist = () => {
    deleteFromWishlist();
  };

  const onAddToCart = () => {
    const singleItem = {
      productId: data?._id,
      quantity: quantity,
    };
    const updatedItems = [...items, singleItem];
    setItems(updatedItems);

    const body = {
      items: updatedItems,
      price: data?.price,
    };
    mutate(body);
  };

  const onRemoveFromCart = () => {
    removeFromCart();
  };

  const handleChange = () => {
    isWishlist ? onDeleteFromWishlist() : onLike();
  };

  const generateColorOptions = (data) => {
    return data?.map((x, idx) => (
      <OptionEntry key={idx}>
        <ColorCircle $color={x?.color} />
        <Label>{x?.name}</Label>
      </OptionEntry>
    ));
  };

  const generateSizeOptions = (data) => {
    return data?.map((x, idx) => <Label key={idx}>{x}</Label>);
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
            Seller:{" "}
            <span>{`${data?.seller?.firstName} ${data?.seller?.lastName}`}</span>
          </Seller>
          <Title>{data?.name}</Title>
          <Collection>{data?.category?.name}</Collection>
          {data?.description && (
            <EntryWrapper>
              <EntryTitle>Description</EntryTitle>
              <Description>{data?.description}</Description>
            </EntryWrapper>
          )}
          <EntryWrapper>
            <EntryTitle>Variation</EntryTitle>
            <TabsWrapper>
              <VariationDropdown
                label={label}
                setLabel={setLabel}
                options={generateColorOptions(colorOptions)}
              />
              <VariationDropdown
                label={sizeOption}
                setLabel={setSizeOption}
                options={generateSizeOptions(sizeOptions)}
              />
            </TabsWrapper>
          </EntryWrapper>
          <EntryWrapper>
            <EntryTitle>Purchase options</EntryTitle>
            <TabsWrapper>
              <GRadioButtonsGroup
                name={"issueType"}
                options={purchaseOption}
                handleChange={handleCheck}
                value={purchaseType}
                row={true}
              />
            </TabsWrapper>
          </EntryWrapper>

          <EntryWrapper>
            <EntryTitle>Quantity</EntryTitle>
            {isWholeSale && (
              <MoqBox>
                <Flex>
                  <InfoIconWhiteBg />
                  <MoqTitle>MOQ</MoqTitle>
                </Flex>
                <MoqText>
                  The minimum order quantity for the product is 2.
                </MoqText>
                <LearnMore onClick={() => setIsMoqModalOpen(true)}>
                  Learn more
                </LearnMore>
              </MoqBox>
            )}
            <QuantityItemWrapper>
              <QuantityCounter
                moq={isWholeSale ? 2 : 1}
                setValue={setQuantity}
                value={quantity}
              />
              <FavoriteBox>
                <GFavoriteIcon
                  checked={isWishlist}
                  handleChange={handleChange}
                />
              </FavoriteBox>
            </QuantityItemWrapper>
          </EntryWrapper>
          <EntryWrapper>
            <EntryTitle>Price</EntryTitle>
            <PriceValue>{`₦${formatAmount(data?.price) || 0}`}</PriceValue>
          </EntryWrapper>
          <GButton
            onClick={isCart ? onRemoveFromCart : onAddToCart}
            label={isCart ? "Remove from cart" : "Add to cart"}
            isLoading={isPending || isRemovingFromCart}
          />
        </DetailsWrapper>
      </ContentWrapper>
      <MoqModal
        handleClose={() => setIsMoqModalOpen(false)}
        isOpen={isMoqModalOpen}
      />
      <LineLoader loading={isAddingToWishlist || isDeletingItemWishlist} />
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

const OptionEntry = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-grow: 1;
`;

const ColorCircle = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background: ${({ $color }) => $color && $color};
`;

const Label = styled.p`
  color: var(--Black-500, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  flex-grow: 1;
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
    font-size: 26px;
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
  gap: 10px;
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

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

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

const MoqBox = styled.div`
  display: flex;
  width: clamp(460px, 470px, 75%);
  height: 33px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #ffe4bf;
  background: #fff7ec;
  margin-bottom: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MoqTitle = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const MoqText = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const LearnMore = styled.p`
  color: var(--Primary-500, #ff4623);
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
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
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media ${devices.mobileL} {
    font-size: 28px;
  }
`;
