import styled from "styled-components";
import {
  DollarShield,
  Heart,
  LockIcon,
  RedHeart,
  Star,
} from "../../Assets/Svgs";
import { GButton } from "../Button/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { devices, formatAmount, IMAGE_BASE_URL } from "../../Utils";
import { useApiGet, useApiSend } from "../../Hooks";
import {
  addToCart,
  addToWishlist,
  getCartItems,
  getWishlist,
  removeCartItem,
} from "../../Urls";
import { toast } from "react-hot-toast";
import { useState, useMemo } from "react";
import { ProductSkeleton } from "../ProductCardSkeleton";
import { LineLoader } from "../LineLoader";
import { deletItemFromWishlist } from "../../Urls/wishlist";
import { useQueryClient } from "@tanstack/react-query";
import { setSelectedProductName } from "../../Redux/Reducers";

export const Product = ({ width, item, mbWidth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const user = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.global);
  const queryClient = useQueryClient();

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
    () => removeCartItem(item?._id),
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
      toast.success("Added to wishliat");
      queryClient.invalidateQueries(["wishlist-data"]);
    },
    (e) => {
      toast.error("Could not add to wishlist");
    }
  );

  const { mutate: deleteFromWishlist, isPending: isDeletingItemWishlist } =
    useApiSend(
      () => deletItemFromWishlist(user?._id, item?._id),
      () => {
        toast.success("Removed from wishliat");
        queryClient.invalidateQueries(["wishlist-data"]);
      },
      (e) => {
        toast.error("Could not remove from wishlist");
      }
    );

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
        (data) => data?.product?._id === item?._id
      );
      return result;
    }
    return false;
  }, [wishlistData, item]);

  const isCart = useMemo(() => {
    if (cartData) {
      const cartItem = cartData.items?.find(
        (data) => data.product?._id === item?._id
      );
      if (cartItem) {
        setQuantity(cartItem?.quantity);
        return true;
      }
    }
    setQuantity(0);
    return false;
  }, [cartData, item]);

  const onLike = (e) => {
    e.stopPropagation();
    const singleItem = {
      productId: item?._id,
      quantity: 1,
    };
    const updatedItems = [singleItem];
    const body = {
      items: updatedItems,
      price: item?.price,
    };
    addWishlist(body);
  };

  const onDeleteFromWishlist = (e) => {
    e.stopPropagation();
    deleteFromWishlist();
  };

  const onAddToCart = () => {
    const singleItem = {
      productId: item?._id,
      quantity: 1,
    };
    const updatedItems = [...items, singleItem];
    setItems(updatedItems);

    const body = {
      items: updatedItems,
      price: item?.price,
    };
    mutate(body);
  };

  const onRemoveFromCart = (e) => {
    e.stopPropagation();
    removeFromCart();
  };

  const handleClick = () => {
    const productCategory = categories.find((x) => x.id === item?.categoryId);
    dispatch(setSelectedProductName(item?.name));
    navigate(`/categories/${productCategory?.name}/${item?._id}`);
  };

  if (isLoadingWishlist || isLoadingCartData) {
    return <ProductSkeleton />;
  }

  return (
    <>
      <Container $width={width} $mbWidth={mbWidth}>
        <ImgContainer onClick={handleClick}>
          <img draggable={false} src={`${IMAGE_BASE_URL}${item?.mainImage}`} />

          {isWishlist ? (
            <Liked onClick={onDeleteFromWishlist}>
              <RedHeart />
            </Liked>
          ) : (
            <Unliked onClick={onLike}>
              <Heart />
            </Unliked>
          )}
          <GradientOverlay />
        </ImgContainer>

        <SellerRate>
          <div>
            <p>Seller:</p>
            <Link
              to={`/${item?.seller?.firstName} ${item?.seller?.lastName}`}
            >{`${item?.seller?.firstName} ${item?.seller?.lastName}`}</Link>
          </div>

          <div>
            <p>{item?.rating}</p>
            <Star />
          </div>
        </SellerRate>
        <Itemdetail>
          <p>{item?.name}</p>
          <BrandTag>{item?.brand?.name}</BrandTag>
        </Itemdetail>
        <RRPContainer>
          <div>
            <DollarShield />
            <p>MSRP</p>
          </div>
          <p>₦{item?.msrp}</p>
        </RRPContainer>

        {user ? (
          <>
            <Price>₦{formatAmount(item?.price)}</Price>
            <GButton
              onClick={isCart ? onRemoveFromCart : onAddToCart}
              label={isCart ? "Remove from cart" : "Add to cart"}
              isLoading={isPending || isRemovingFromCart}
            />
          </>
        ) : (
          <UnAuthPrice>
            <div>
              <LockIcon />
            </div>
            <p>₦{item?.price}</p>
          </UnAuthPrice>
        )}
      </Container>

      <LineLoader
        loading={
          isAddingToWishlist ||
          isDeletingItemWishlist ||
          isPending ||
          isRemovingFromCart
        }
      />
    </>
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
    background-color: var(--hover-color);
  }

  @media ${devices.mobileL} {
    width: ${({ $width, $mbWidth }) => ($mbWidth ? $mbWidth : $width)};
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
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
  display: flex;
  align-items: flex-end !important;
  gap: 10px;
  p {
    font-size: 1.2rem;
    color: var(--Black-500, #151515);
    height: 46.67px;
  }

  @media ${devices.mobileL} {
    p {
      font-size: 16px;
    }
  }
`;

const Unliked = styled.div`
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
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const BrandTag = styled.p`
  background-color: var(--black50);
  font-size: 0.6rem !important;
  padding: 2px 4px;
  border-radius: 4px;
`;

const Liked = styled.div`
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
  background: var(--hover-color);
  cursor: pointer;
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
