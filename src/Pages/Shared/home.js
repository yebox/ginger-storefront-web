import styled, { keyframes } from "styled-components";
import {
  GButton,
  Product,
  GTextField,
  Chip,
  GModal,
  Carousel,
  ProductSkeleton,
  Empty,
  LineLoader,
} from "../../Ui_elements";
import React, { memo, useState, useEffect, useRef } from "react";
import Vector from "../../Assets/Images/vector-background.png";
import AddPicture from "../../Assets/Images/ad-picture.png";
import {
  BecomeSellerSection,
  BlogCard,
  GuideCard,
  InstaFooter,
  SellerCard,
} from "./Components";
import Partners from "../../Assets/Images/partners.png";
import HeroImage from "../../Assets/Images/hero-image.png";
import HeroMobile from "../../Assets/Images/landing_mobile.png";
import {
  CircleText,
  LeftArrow,
  Mail,
  RedRightArrow,
  RightArrow,
  WhiteX,
} from "../../Assets/Svgs";
import Swiper from "swiper";
import { useNavigate } from "react-router-dom";
import { useApiGet } from "../../Hooks";
import {
  getCategories,
  getProducts,
  getProductBrands,
  getAllStores,
} from "../../Urls";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { devices } from "../../Utils";
// import InstaFooter from "./Components/instaFooter";

const Home = () => {
  const navigate = useNavigate();
  const [selectCat, setSelectCat] = useState(0);
  const [openCookie, setOpenCookie] = useState(true);
  const [categoryId, setCategoryId] = useState("");
  const [openModal, setOpenModal] = useState(true);
  const sliderRef = useRef(null);
  const user = useSelector((state) => state.user);
  const acceptCookie = Cookies.get("ginger-cookie-policy");
  const swiper = new Swiper();
  const firstCatMount = useRef(true);
  const { isMobile } = useDeviceCheck();

  const { data: products, isLoading } = useApiGet(
    ["get-featured-products"],
    () => getProducts({ isFeatured: true }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  const { data, isLoading: isLoadingStores } = useApiGet(
    ["get-all-stores"],
    () => getAllStores(),
    {
      enable: true,
    }
  );

  const {
    data: topProducts,
    isLoading: isLoadingTopProducts,
    isFetching: isFetchingTopProducts,
    refetch: fetchProducts,
  } = useApiGet(
    ["get-top-products"],
    () =>
      getProducts({
        isTopSeller: true,
        categoryId: categoryId,
      }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  const { data: productbrands, isLoading: isLoadingProductBrands } = useApiGet(
    ["product-brands"],
    () => getProductBrands(),
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  const {
    data: categories,
    isLoading: isLoadingCategories,
    refetch: fetchCat,
  } = useApiGet(["categories"], () => getCategories(), {
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const lastFourFeaturedProducts = products?.slice(-4);

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

  const filterStoresWithImages = (data) => {
    if (data) {
      const filteredStores = data.filter((store) => {
        return (
          Object.prototype.hasOwnProperty.call(store, "backgroundImage") &&
          Object.prototype.hasOwnProperty.call(store, "mainImage")
        );
      });

      return [...filteredStores, ...filteredStores];
    }
  };
  const filteredStores = filterStoresWithImages(data);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  const EndIcon = () => (
    <EndIconContainer>
      <Mail />
      <p>Subscribe</p>
    </EndIconContainer>
  );

  return (
    <Container>
      <Hero>
        <HeroDetails>
          <p>Explore, Buy Wholesale, Sell on Ginger</p>
          <h3>Discover the convenience of</h3>
          <h3>wholesale marketplace</h3>

          {isMobile && (
            <MobileDetails>
              <h4>Discover the {""}</h4>
              <h4>convenience of</h4>
              <h4>wholesale marketplace</h4>
            </MobileDetails>
          )}

          <ButtonContainer>
            <GButton
              label={user ? `Shop now` : "Sign up for free"}
              onClick={() => navigate(user ? `/marketplace` : `/login`)}
            />

            <GButton
              outline
              onClick={() => navigate("/sell-on-ginger")}
              label="Sell on ginger"
            />
          </ButtonContainer>
        </HeroDetails>
        <HeroImageContainer>
          <div>
            <span />
            <p>world of limitless beauty options</p>
          </div>
        </HeroImageContainer>
      </Hero>

      {/* <HowItWorks>
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </HowItWorks> */}

      <Category>
        <CategoryHeader>
          <h4>Beauty procurement, simplified for you</h4>
          <span />
          <p>
            Ginger’s wide network of local and international suppliers gives you
            access to all of your must-have brands and products in one place.
          </p>
        </CategoryHeader>

        <CatergoryGridContainer>
          <CatFirstBox>
            <Barber>
              <CatShopBottom>
                <h6>Barbing</h6>

                <Shopbutton onClick={() => navigate("/categories/all")}>
                  Shop Now
                </Shopbutton>
              </CatShopBottom>
            </Barber>
            <NailSkinContianer>
              <Nails>
                <CatShopBottom>
                  <h6>Nails</h6>

                  <Shopbutton onClick={() => navigate("/categories/all")}>
                    Shop Now
                  </Shopbutton>
                </CatShopBottom>
              </Nails>
              <Skin>
                <CatShopBottom>
                  <h6>Skin & Body</h6>

                  <Shopbutton onClick={() => navigate("/categories/all")}>
                    Shop Now
                  </Shopbutton>
                </CatShopBottom>
              </Skin>
            </NailSkinContianer>
          </CatFirstBox>
          <CatSecondBox>
            <CatShopBottom>
              <h6>Braids & Weaves</h6>
              <Shopbutton onClick={() => navigate("/categories/all")}>
                Shop Now
              </Shopbutton>
            </CatShopBottom>
          </CatSecondBox>
        </CatergoryGridContainer>

        <ViewAllCat>
          <GButton
            outline
            label="See all categories"
            onClick={() => navigate("/categories/all")}
          />
        </ViewAllCat>
      </Category>

      <FeatureProductsContainer>
        <h4>Featured Products</h4>
        <FeaturedItemContainer>
          {lastFourFeaturedProducts ? (
            lastFourFeaturedProducts?.map((product, index) => (
              <Product
                item={product}
                key={index}
                width={`23.8%`}
                mbWidth={`47%`}
              />
            ))
          ) : (
            <Empty />
          )}
        </FeaturedItemContainer>
      </FeatureProductsContainer>

      <ViewAllCat>
        <GButton
          outline
          label="Shop more"
          onClick={() => navigate("/marketplace")}
        />
      </ViewAllCat>

      <LargeAd>
        <AdContainer>
          <div>
            <img src={AddPicture} />
          </div>

          <div>
            <h4>Pain relief CBD salve oil</h4>
            <p>Place your order now and buy get a better resale value</p>
            <GButton
              label={"Shop now"}
              outline
              width={`178px`}
              onClick={() => navigate("/categories/all")}
            />
          </div>
        </AdContainer>

        <CircleItem>
          <CircleText />
          <h5>01</h5>
        </CircleItem>
      </LargeAd>

      <BecomeSellerSection />

      <TopSellerContainer>
        <TopSellerHeader>
          <div>
            <h4>Top sellers</h4>

            <p>
              Browse more top selling products from top brands and their
              categories
            </p>
          </div>
          <div>
            <div onClick={slidePrev}>
              <LeftArrow />
            </div>
            <div onClick={slideNext}>
              <RightArrow />
            </div>
          </div>
        </TopSellerHeader>

        <ChipContainer>
          {categories?.map((item, index) => (
            <Chip
              activeIndex={selectCat}
              onClick={() => {
                setCategoryId(item?._id);
                setSelectCat(index);
              }}
              index={index}
              key={index}
            >
              {item?.name}
            </Chip>
          ))}
        </ChipContainer>

        <SellerCardsContainer>
          <Carousel
            width={400}
            data={filteredStores}
            ref={sliderRef}
            renderCard={(item) => {
              return <TopSellerCard item={item} />;
            }}
          />
        </SellerCardsContainer>
      </TopSellerContainer>

      <Wholesale>
        <img src={Vector} />
        <div>
          <h4>All in one wholesale portal</h4>
          <p>
            Start exploring thousands of brands and enjoy wholesale purchases
          </p>
          <GButton
            label="Shop now"
            alternate
            width={`178px`}
            onClick={() => navigate("/marketplace")}
          />
        </div>
      </Wholesale>

      <BlogPosts>
        <BlogPostHeader>
          <h4>Recent Blog Post</h4>
          <div>
            <p>Read More</p>
            <RedRightArrow />
          </div>
        </BlogPostHeader>
        <BlogBody>
          {[...Array(4)].map((_, index) => (
            <BlogCard key={index} width={"23.8%"} />
          ))}
        </BlogBody>
      </BlogPosts>

      <PartnerSection>
        <img src={Partners} />
      </PartnerSection>

      <Subscribe>
        <div>
          <h4>Subscribe to get 30% discount!</h4>
          <GTextField endIcon={<EndIcon />} placeholder={"Enter your email"} />
        </div>
      </Subscribe>

      <InstaFooter />

      {openCookie && !acceptCookie && (
        <CookieContainer>
          <div>
            <h6>Accept all Cookies</h6>

            <p>
              This website uses cookies to optimize your experience and to
              provide us insight on how to interact with the site. All
              information shared with us through cookies are secure and covered
              by our data privacy obligations. You can access our Privacy Policy
              here
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                Cookies.set("ginger-cookie-policy", true);
                setOpenCookie(false);
              }}
            >
              Accept only essential
            </button>
            <button
              onClick={() => {
                Cookies.set("ginger-cookie-policy", true);
                setOpenCookie(false);
              }}
            >
              Accept
            </button>
          </div>
        </CookieContainer>
      )}

      <GModal open={openModal} handleClose={() => setOpenModal(false)}>
        <ModalContent>
          <img src="https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <ModalRedbanner>
            <p>Never miss out on our discounts and promos</p>
          </ModalRedbanner>

          <ModalSub>
            <b>Subscribe to get 30% discount!</b>
          </ModalSub>

          <ModalFieldContainer>
            <GTextField placeholder={"Enter your email"} />
          </ModalFieldContainer>

          <ModalButton>
            <GButton label={"Subscribe"} />
          </ModalButton>

          <ModalClose onClick={() => setOpenModal(false)}>
            <WhiteX />
          </ModalClose>
        </ModalContent>
      </GModal>

      <LineLoader
        loading={
          isLoadingTopProducts ||
          isLoadingCategories ||
          isLoadingProductBrands ||
          isLoading ||
          isFetchingTopProducts
        }
      />
    </Container>
  );
};

export default memo(Home);

const Container = styled.main`
  width: inherit;
`;

const Hero = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  width: 100%;
  padding-left: 5%;

  @media ${devices.mobileL} {
    display: block;
    position: relative;
    padding-left: 0;
  }
`;

const HeroImageContainer = styled.div`
  background-image: url(${HeroImage});
  width: 70%;
  height: 46.8rem;
  position: relative;
  background-position: center;
  background-color: aquamarine;
  background-size: cover;
  background-repeat: no-repeat;

  img {
    height: 46.8rem;
    width: auto;
  }

  div {
    position: absolute;
    bottom: 5%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
    p {
      color: var(--White, #fefefe);
      text-align: right;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      line-height: 140%; /* 19.6px */
      letter-spacing: 0.42px;
    }
    div {
      width: 18.75rem;
      display: inline;
      border: 1px solid white;
    }
    span {
      width: 320px;
      height: 1px;
      flex-shrink: 0;
      background-color: #d5d5d559;
      margin-top: 10px;
    }
  }

  @media ${devices.mobileL} {
    /* height: calc((100vw - 40px) * 1.2625); */
    background-image: url(${HeroMobile});
  }
`;
const HeroDetails = styled.div`
  width: 30%;
  height: 46.87rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13.75rem;
  position: relative;
  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray-300);
    margin-bottom: 30px;
  }
  h3 {
    background-color: white;
    position: absolute;
    padding: 0px 20px 10px;
    white-space: nowrap;
    font-size: 3.7rem;
    font-weight: 500;
    z-index: 1;
    left: -5%;
    /* transform: translateX(-50%); */
  }
  h3:nth-child(3) {
    top: 21.8rem;
    padding-bottom: 26px;
  }
  h3:nth-child(2) {
    bottom: 25rem;
    padding-top: 14px;
  }

  @media ${devices.mobileL} {
    position: absolute;
    padding: 10px;
    h3 {
      display: none;
    }
  }
`;

const MobileDetails = styled.div`
  h4 {
    background-color: white;
    padding: 10px;
    /* white-space: nowrap; */
    position: relative;
    font-size: 28px;
    width: fit-content;
    font-weight: 500;
    z-index: 1;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  width: calc(100% - 3.56rem);
  margin-top: -10px;
`;

const Category = styled.section`
  height: auto;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5%;
  gap: 38px;
  h4 {
    font-weight: 500;
    font-size: 2.5rem;
    width: 35%;
    max-width: 430px;
  }
  span {
    height: 86px;
    width: 1px;
    background: #c5c5c5;
  }
  p {
    display: flex;
    align-items: center;
    height: 6.25rem;
    width: 45%;
    max-width: 530px;
    font-size: 1.25rem;
    color: #151515;
    line-height: 140%;
  }
`;

const CatergoryGridContainer = styled.div`
  display: flex;
  padding: 0 5% 75px;
  gap: 2%;
  height: 100%;
`;

const CatFirstBox = styled.div`
  flex: 0.5;
  width: 100%;
  height: 580px;
`;
const CatSecondBox = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  justify-content: flex-end;
  background-image: url("https://images.unsplash.com/photo-1572955304332-bf714bd49add?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-color: var(--hover-color);
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
  position: relative;
  height: 580px;

  &:hover {
    background-size: 105%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: rgba(
      0,
      0,
      0,
      0.3
    ); /* Make the overlay slightly darker on hover */
  }
`;

const Barber = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  padding: 1.2rem;
  margin-bottom: 20px;
  background-color: var(--hover-color);
  height: 280px;
  background-image: url("https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=3044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease;

  &:hover {
    background-size: 105%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const NailSkinContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Nails = styled.div`
  width: 100%;
  background-color: var(--hover-color);
  height: 280px;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  justify-content: flex-end;
  padding-bottom: 20px;
  background-image: url("https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: all 0.25s ease;

  &:hover {
    background-size: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Skin = styled.div`
  width: 100%;
  flex-direction: column;
  position: relative;
  display: flex;
  padding: 1.2rem;
  /* padding-right: 2rem; */
  justify-content: flex-end;
  padding-bottom: 20px;
  background-image: url("https://images.unsplash.com/photo-1561228987-8e7379dde477?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    background-size: 105%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const CatShopBottom = styled.div`
  /* position: absolute; */
  z-index: 4;
  /* bottom: 1.2rem; */
  /* left: 1.2rem; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  flex-wrap: wrap;
  margin: 0 auto;
  h6 {
    font-size: 2rem;
    color: white;
    font-weight: 500;
  }
`;

const Shopbutton = styled.button`
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ViewAllCat = styled.div`
  width: 11.12rem;
  margin: 0 auto;
`;
const FeatureProductsContainer = styled.section`
  width: 100vw;
  padding: 90px 5% 67px;

  h4 {
    font-weight: 500;
    font-size: 2.5rem;
    margin-bottom: 5%;
  }
`;

const FeaturedItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LargeAd = styled.section`
  padding: 10% 5%;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Vector});
  background-position: center;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
`;
const AdContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 160px;
  position: relative;
  width: 100%;

  p {
    margin-bottom: 1rem;
    width: 75%;
  }

  h4 {
    color: var(--Black-500, #151515);
    font-family: "Roboto Serif";
    font-size: 52px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 57.2px */
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: inherit;
    width: 360px;
  }
`;
const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const CircleItem = styled.div`
  position: absolute;
  left: 560px;
  background-color: white;
  width: 225px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    width: 190px;
    height: 190px;
    animation: ${rotateAnimation} 10s linear infinite;
  }

  h5 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    font-weight: 700;
    color: var(--light-lavendar);
  }
`;

const TopSellerContainer = styled.section`
  margin-top: 250px;
  width: 100%;
`;

const TopSellerHeader = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;

  > div:nth-child(1) {
    h4 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 18px;
    }
    p {
      width: 80%;
      font-size: 1.25rem;
      color: #151515;
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
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const ChipContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5%;
  margin-top: 60px;
`;

const SellerCardsContainer = styled.div`
  max-width: 100vw;
  margin-top: 53px;
  display: flex;
  margin-left: 5%;
  gap: 1.2rem;
  overflow-x: auto !important;
`;
import { useDeviceCheck } from "../../Hooks/useDeviceCheck";
import TopSellerCard from "./Components/topSellerCard";

const Wholesale = styled.div`
  padding: 10% 5%;
  margin-top: 5%;
  position: relative;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 334px;

  img {
    position: absolute;
    object-fit: cover;
    opacity: 0.3;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    z-index: 2;
    h4 {
      color: var(--White, #fefefe);
      text-align: center;
      font-family: "Roboto Serif";
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 62.4px */
    }
    p {
      color: var(--White, #fefefe);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      margin-bottom: 20px;
    }
  }
`;

const BlogPosts = styled.section`
  margin-bottom: 10%;
`;

const BlogPostHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 0 5%;
  margin-top: 10%;
  justify-content: space-between;
  h4 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    cursor: pointer;
    p {
      color: var(--primary-color);
      transition: all 0.2s ease;
    }
    &:hover {
      p {
        font-weight: 600;
      }
    }
  }
`;

const BlogBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  padding: 0 5%;
`;

const PartnerSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0;
  img {
    width: 80vw;
    height: auto;
  }
`;

const Subscribe = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8% 0;
  h4 {
    color: #0f0f0f;
    font-size: 34px;
    font-family: Barlow;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 40.8px */
  }
  > div {
    width: 600px;
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;
  }
`;

const EndIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 1rem;
    color: var(--black);
    font-weight: 500;
  }
`;

const CookieContainer = styled.div`
  background-color: var(--black);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 5%;
  position: sticky;
  bottom: 0;
  z-index: 10;
  left: 0;
  div:nth-child(1) {
    width: 56%;
    h6 {
      color: #fff;
      font-family: "Roboto Serif";
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: white;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 20px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      padding: 1rem 2rem;
      border-radius: 100px;
      border: none;
      min-width: 150px;
      cursor: pointer;
    }

    button:nth-child(1) {
      color: white;
      background-color: var(--black);
    }
    button:nth-child(2) {
      background-color: white;
      color: black;
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    height: 18.75rem;
    width: 50vw;
    object-fit: cover;
    margin-bottom: 0;
    filter: brightness(0.8);
  }
`;
const ModalRedbanner = styled.div`
  background-color: var(--primary-color);
  margin-top: -3px;
  padding: 12px 0;
  width: 100%;
  p {
    text-align: center;
    color: white;
  }
`;
const ModalSub = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
  margin-bottom: 50px;
  b {
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
  }
`;
const ModalFieldContainer = styled.div`
  width: 70%;
  margin-bottom: 40px;
`;

const ModalButton = styled.div`
  width: 60%;
  margin-bottom: 45px;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
`;

const HowItWorks = styled.div`
  padding: 5%;
  display: flex;
  background-color: var(--lower-nav);
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
