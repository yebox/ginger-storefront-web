import styled from "styled-components";
import gsap from "gsap";
import {
  GBreadCrumbs,
  Chip,
  Product,
  GButton,
  GPagination,
  GModal,
  LineLoader,
  Carousel,
  Empty,
} from "../../../Ui_elements";
import { useEffect, useRef } from "react";
import {
  DiscountBannerVector,
  DownArrow,
  GiftItem,
  Mail,
  ShareIcon,
} from "../../../Assets/Svgs";
import { useState, memo } from "react";
import {
  BecomeSellerSection,
  InstaFooter,
  DiscountBanner,
} from "../Components";
import { MinimumSpendBanner } from "./components/minimumSpendBanner";
import { LeftArrow, RightArrow } from "../../../Assets/Svgs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApiGet } from "../../../Hooks";
import {
  getCategories,
  getProducts,
  getSellerStores,
  getShoppingConfig,
} from "../../../Urls";
import { amountToWords, formatAmount, IMAGE_BASE_URL } from "../../../Utils";
import { toast } from "react-hot-toast";
import { debounce } from "lodash";

const timeline = gsap.timeline();

const SellerStore = () => {
  const location = useLocation();
  console.log(location?.state, "state");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const sellerString = queryParams.get("sellerId");
  const seller = JSON.parse(decodeURIComponent(sellerString));
  const [selectCat, setSelectCat] = useState(0);
  const [openModal, seOpenModal] = useState(true);
  const [categoryId, setCategoryId] = useState("");
  const discountItemRef = useRef();
  const discountDetails = useRef();
  const arrowRef = useRef();
  const bigCardRef = useRef();
  const [showingBig, setShowingBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const currentUrl = window.location.href;
  const slideRef = useRef();
  const firstCatMount = useRef(true);

  const slideNext = () => {
    if (slideRef.current) {
      slideRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (slideRef.current) {
      slideRef.current.swiper.slidePrev();
    }
  };
  const {
    data: topProducts,
    isLoading: isLoadingTopProducts,
    refetch: fetchProducts,
  } = useApiGet(
    ["get-top-products-seller"],
    () =>
      getProducts({
        isTopSeller: true,
        sellerId: seller?._id,
        ...(categoryId ? { categoryId } : {}),
      }),
    {
      enabled: !!categoryId,
    }
  );

  const {
    data: allProducts,
    isLoading: isLoadingAllProducts,
    isFetching: isFetchingProduct,
    refetch: fetchAllProducts,
  } = useApiGet(
    ["get-all-products-seller"],
    () =>
      getProducts({
        sellerId: seller?._id,
        ...(categoryId ? { categoryId } : {}),
      }),
    {
      enabled: !!categoryId,
    }
  );

  const { data, isLoading } = useApiGet(
    ["seller-stores"],
    () => getSellerStores(seller?._id),
    {
      enabled: true,
    }
  );

  const { data: shoppingConfig, isLoading: isLoadingConfig } = useApiGet(
    ["shoping-config"],
    () => getShoppingConfig(seller?._id),
    {
      enabled: true,
    }
  );

  console.log(shoppingConfig, "shopping confg");

  const { data: categories, isLoading: isLoadingCategories } = useApiGet(
    ["get-categories`"],
    () => getCategories(),
    {
      enabled: true,
    }
  );

  // if (seller === undefined || !sellerString) {
  //     navigate('/')
  // }

  useEffect(() => {
    if (categories?.length > 0) {
      const initialCategoryId = categories[0]?._id;
      setCategoryId(initialCategoryId);
    }
  }, [categories]);

  useEffect(() => {
    fetchProducts();
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  const handleSendMessage = () => {
    const sellerEmail = data ? data[0]?.email : "";
    const subject = "Regarding your product";
    const body =
      "Hello, I am interested in your product. Can you provide more details?";

    const mailtoLink = `mailto:${sellerEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.to(discountItemRef.current, {
        duration: 0.4,
        x: -10,
        repeat: 20,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  const hoverAnimation = () => {
    setIsHovered(true);
    gsap.fromTo(
      discountItemRef.current,
      {
        width: "200px",
      },
      {
        width: "310px",
        left: "78%",
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      discountDetails.current,
      {
        display: "none",
        opacity: 0,
      },
      {
        display: "block",
        opacity: 1,
        duration: 0.3,
        delay: 0.5,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      arrowRef.current,
      {
        display: "none",
        opacity: 0,
      },
      {
        display: "block",
        opacity: 1,
        duration: 0.3,
        delay: 0.4,
        ease: "power2.inOut",
      }
    );
  };

  const resetAnimation = () => {
    setIsHovered(false);
    gsap.fromTo(
      discountItemRef.current,
      {
        width: "310px",
        left: "78%",
      },
      {
        width: "fit-content",
        duration: 0.2,
        delay: 0.2,
        left: "90%",
        ease: "power2.inOut",
      }
    );

    gsap.to(discountDetails.current, {
      display: "none",
      opacity: 0,
      duration: 0,
      ease: "power2.inOut",
    });

    gsap.to(arrowRef.current, {
      display: "none",
      opacity: 0,
      duration: 0,
      ease: "power2.inOut",
    });
  };

  const displayBigCard = () => {
    setShowingBig(true);
    gsap.to(arrowRef.current, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      bigCardRef.current,
      {
        display: "none",
        opacity: 0,
        y: 60,
      },
      {
        display: "block",
        opacity: 1,
        duration: 0.5,
        y: 1,
        ease: "power2.inOut",
      }
    );
  };

  const hideBigCard = () => {
    setShowingBig(false);
    gsap.to(arrowRef.current, {
      rotate: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      bigCardRef.current,
      {
        display: "block",
        opacity: 0,
        y: 1,
      },
      {
        display: "none",
        opacity: 0,
        duration: 0.5,
        y: 1,
        ease: "power2.inOut",
      }
    );
  };

  const debouncedHover = debounce(hoverAnimation, 100);
  const debouncedReset = debounce(resetAnimation, 1000);

  return (
    <Container>
      <GModal open={openModal} handleClose={() => seOpenModal(false)}>
        <ModalContainer>
          <VectorContainer>
            <DiscountBannerVector />
          </VectorContainer>
          <h5>Minimum Spend</h5>

          <ModalItem>
            <h6>Minimum Spend Information</h6>
            <p>
              Please be advised that this seller has a Minimum Spend requirement
              in place. The Minimum Spend represents the minimum amount of money
              that must be spent on this seller&apos;s products in a single
              transaction.
            </p>
          </ModalItem>

          <ModalItem>
            <h6>Why is there an Minimum Spend?</h6>
            <p>
              The Minimum Spend is implemented by the seller to ensure that each
              transaction meets a certain threshold, optimizing the efficiency
              of their operations and resources.
            </p>
          </ModalItem>

          <ModalItem>
            <h6>What is the Minimum Spend for this product?</h6>
            <p>
              The Minimum Spend for this seller is{" "}
              <span>
                {" "}
                {amountToWords(shoppingConfig?.minSpend)} (
                {formatAmount(shoppingConfig?.minSpend)})
              </span>
              . Please ensure that your total purchase amount meets or exceeds
              this threshold to proceed with the transaction.
            </p>
          </ModalItem>

          <ModalItem>
            <h6>What if I don&apos;t meet the Minimum Spend?</h6>
            <p>
              If your purchase amount falls below the Minimum Spend, you may not
              be able to proceed with the transaction. In such cases, we
              recommend exploring additional products from this seller to meet
              the Minimum Spend requirement.
            </p>
          </ModalItem>

          <p>
            Thank you for your understanding and cooperation. If you have
            further questions or concerns regarding the Minimum Spend, please
            don&apos;t hesitate to <Link>Contact Us</Link>.
          </p>
        </ModalContainer>
      </GModal>
      <Breadcrumb>
        <GBreadCrumbs />
      </Breadcrumb>

      <BiggerDiscount ref={bigCardRef}>
        <Save>Save up to 20%</Save>
        <SaveDetail>
          Off every purchase above <span>₦100,000</span> made on{" "}
          {data ? data[0]?.name : "this store"}
        </SaveDetail>
      </BiggerDiscount>

      {shoppingConfig?.discounts?.length > 0 && (
        <DiscountItemContainer
          ref={discountItemRef}
          onMouseEnter={() => {
            debouncedHover();
          }}
          onMouseLeave={resetAnimation}
          // onMouseOut={resetAnimation}
        >
          <DiscountItem>
            <GiftItem />
          </DiscountItem>
          <DiscountDetails
            ref={discountDetails}
            onClick={() => {
              showingBig ? hideBigCard() : displayBigCard();
            }}
            onMouseOver={(e) => e.stopPropagation()}
            onMouseLeave={() => {
              hideBigCard();
              resetAnimation();
            }}
          >
            <Exciting>Exciting offer!!!</Exciting>
            <p>See what’s new</p>
          </DiscountDetails>
          {/* <ArrowContainer
                        onClick={() => {
                            showingBig ? hideBigCard() : displayBigCard()
                        }}
                        ref={arrowRef}
                        onMouseEnter={() => hoverAnimation()}
                    >
                        <DownArrow />
                    </ArrowContainer> */}
        </DiscountItemContainer>
      )}

      <Banner
        url={
          data
            ? `${IMAGE_BASE_URL}${data[0]?.backgroundImage}`
            : "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
        }
      >
        <div>
          <BannerDetail>
            <img
              src={
                data
                  ? `${IMAGE_BASE_URL}${data[0]?.mainImage}`
                  : "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
              }
            />

            <div>
              <h6>{data ? data[0]?.name : "Store name"}</h6>
              <p>
                Ginger’s wide network of local and international suppliers gives
                you access to all of your must-have brands and products in one
                place.
              </p>
            </div>
          </BannerDetail>

          <ShareContainer>
            <BannerMessage onClick={handleSendMessage}>
              <Mail />
              <p>Message Seller</p>
            </BannerMessage>

            <ShareHolder
              onClick={() => {
                navigator.clipboard.writeText(currentUrl);
                toast.success("Copied to clipboard!");
              }}
            >
              <ShareIcon />
            </ShareHolder>
          </ShareContainer>
        </div>
      </Banner>

      <ChipContainer>
        {categories?.map((item, index) => (
          <Chip
            activeIndex={selectCat}
            onClick={() => {
              setCategoryId(item?._id);
              setSelectCat(index);
            }}
            to={`/store?sellerId=${encodeURIComponent(JSON.stringify(seller))}`}
            index={index}
            key={index}
          >
            {item?.name}
          </Chip>
        ))}
      </ChipContainer>

      {shoppingConfig?.minSpend && (
        <ChipContainer>
          <MinimumSpendBanner
            amount={shoppingConfig?.minSpend}
            setOpenModal={seOpenModal}
            name={data ? data[0]?.name : "Store"}
          />
        </ChipContainer>
      )}

      {/* <DiscountContainer>
                <DiscountBanner />
            </DiscountContainer> */}

      <TopSellerHeader>
        <div>
          <h4>Top sellers</h4>
        </div>
        {/* <div>
                    <div onClick={slidePrev}>
                        <LeftArrow />
                    </div>
                    <div onClick={slideNext}>
                        <RightArrow />
                    </div>
                </div> */}
      </TopSellerHeader>
      <ContentWrapper>
        <RightContent>
          <ProductsWrapper>
            {topProducts?.length > 0 ? (
              // <Carousel
              //     width={200}
              //     data={topProducts}
              //     ref={slideRef}
              //     renderCard={(item, index) => {
              //         return (
              //             <Product
              //                 item={item}
              //                 key={index}
              //             // width={'17'}
              //             />
              //         )
              //     }}
              // />
              topProducts?.map((item, index) => (
                <Product item={item} key={index} width={`17.3rem`} />
              ))
            ) : (
              <Empty />
            )}
          </ProductsWrapper>
          {topProducts?.length > 0 && (
            <GButton label={"See more"} outline width={"172px"} />
          )}
        </RightContent>
      </ContentWrapper>

      <TopSellerHeader>
        <div>
          <h4>All products</h4>
        </div>
      </TopSellerHeader>
      <ContentWrapper>
        <RightContent>
          <ProductsWrapper>
            {allProducts?.length > 0 ? (
              allProducts?.map((item, index) => (
                <Product item={item} key={index} width={`17.3rem`} />
              ))
            ) : (
              <Empty />
            )}
          </ProductsWrapper>
        </RightContent>
      </ContentWrapper>

      <PaginationContainer>
        <GPagination />
      </PaginationContainer>

      <BecomeSellerContainer>
        <BecomeSellerSection />
      </BecomeSellerContainer>
      <LineLoader
        loading={
          isLoading ||
          isLoadingTopProducts ||
          isLoadingAllProducts ||
          isLoadingCategories ||
          isFetchingProduct ||
          isLoadingConfig
        }
      />
      <InstaFooter />
    </Container>
  );
};

export default memo(SellerStore);

const Container = styled.main`
  position: relative;
`;

const Breadcrumb = styled.section`
  padding: 2% 5%;
`;

const Banner = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 0 48px 44px 2rem;
  margin: 0 5%;
  height: 60vh;
  background: ${({ url }) =>
    url
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${url}) center / cover no-repeat`
      : `url('https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1')`};
  background-color: aquamarine;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: white;
    }
  }
`;

const DiscountContainer = styled.div`
  margin: 0;
  background-color: red;
`;
const ShareContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
const ShareHolder = styled.div`
  background: rgba(254, 254, 254, 0.7);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;

const BannerMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  gap: 8px;
  cursor: pointer;
  background: rgba(254, 254, 254, 0.7);
  transition: all 0.3s ease;
  p {
    color: var(--black) !important;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
const BannerDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 128px;
    height: 128px;
    border-radius: 10px;
  }

  h6 {
    font-size: 2rem;
    font-style: normal;
    margin-bottom: 23px;
    color: white;
  }

  p {
    color: white;
    width: 60%;
  }
`;

const BecomeSellerContainer = styled.div`
  margin-bottom: 30%;
`;

const ChipContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5%;
  margin-top: 5%;
`;

const PaginationContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5%;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 62px;
  padding: 0 0 108px 18px;
`;

const ProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
`;

const TopSellerHeader = styled.div`
  margin: 20px 5%;
  display: flex;
  justify-content: space-between;

  > div:nth-child(1) {
    h4 {
      font-family: Barlow;
      font-size: 34px;
      font-weight: 500;
      margin-bottom: 1.75rem;
    }
    p {
      width: 80%;
      font-size: 1.25rem;
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--gray-100);
      cursor: pointer;
    }
  }
`;

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

const DiscountItemContainer = styled.section`
  position: sticky;
  top: 40vh;
  /* float: right; */
  left: 90%;
  padding: 10px;
  border: 1px solid var(--primary-color);
  background-color: #ffece9;
  width: fit-content;
  z-index: 50;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const DiscountItem = styled.div`
  background-color: var(--black);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DiscountDetails = styled.div`
  margin-left: 12px;
  margin-right: 22px;
  width: fit-content;
  opacity: 0;
  transition: all 1s ease;
  display: none;
`;

const Exciting = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
`;

const BiggerDiscount = styled.div`
  width: 320px;
  padding: 18px 34px;
  border: 0.9px solid #ffc6bb;
  border-radius: 12px;
  position: sticky;
  top: 27vh;
  left: 77.8%;
  display: none;
  z-index: 50;
  background-color: black;
`;

const Save = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  color: var(--primary-color);
`;

const SaveDetail = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: white;
  span {
    color: #ffc6bb;
  }
`;

const ArrowContainer = styled.div`
  display: none;
`;
// const ContactMessage = styled.p`
//     margin-top: "20px";
// `
