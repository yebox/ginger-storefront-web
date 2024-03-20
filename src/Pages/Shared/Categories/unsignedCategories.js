import styled from "styled-components";
import { GBreadCrumbs, Chip, GButton, Product, LineLoader } from "../../../Ui_elements";
import { memo } from "react";
import { categoriesData } from "./data";
import { useState } from "react";
import { SellerCard } from "../Components";
import { useNavigate } from "react-router-dom";
import CallToActionImg from "../../../Assets/Images/call-to-action.png";
import FooterImage from "../../../Assets/Images/footer.png";
import FirstGirl from "../../../Assets/Images/frist_girl.png"
import Middle from "../../../Assets/Images/middle.png"
import LastGirl from "../../../Assets/Images/last_girl.png"
import { CategoryCard } from "./Components";
import { RedRightArrow } from "../../../Assets/Svgs";
import { useApiGet } from "../../../Hooks";
import { getCategories } from '../../../Urls/categories';
import { getProducts } from "../../../Urls";
import { TroubleshootTwoTone } from "@mui/icons-material";


const UnsignedCategories = () => {
  const [selectCat, setSelectCat] = useState(0);
  const navigate = useNavigate();

  const { data, isLoading } = useApiGet(
    ['all-categories'],
    () => getCategories(),
    {
      enabled: true,
    }
  )

  const { data: products, isLoading: isLoadingProducts } = useApiGet(
    ['top-products'],
    () => getProducts({ isTopSeller: true }),
    {
      enabled: true,
    }
  )

  return (
    <Container>
      <Breadcrumb>
        <GBreadCrumbs />
      </Breadcrumb>

      <Banner>
        <BannerImageHolder>
          <img src={FirstGirl} />
          <img src={Middle} />
          <img src={LastGirl} />
        </BannerImageHolder>

        <BannerAdd>
          <FirstText>
            <h6>Beauty procurement, <br /> simplified for you</h6>
          </FirstText>
          <SecondText>
            <p>Ginger’s wide network of local and international suppliers
              gives you access to all of your must-have brands and products
              in one place.
            </p>
          </SecondText>
        </BannerAdd>
      </Banner>

      <ProductFilterContainer>
        <ProductDisplay>
          <SectionTags>Top Ginger Categories</SectionTags>
          <StoresDisplay>

            {
              data?.map((item, index) => (
                <CategoryCard
                  key={index}
                  item={item}
                  width={'17.8rem'}
                />
              ))
            }



          </StoresDisplay>

          <FlexContainer>
            <SectionTags>Top Sellers</SectionTags>
            <MoreContainer onClick={() => navigate('/marketplace')}>
              <p>See more</p>
              <RedRightArrow />
            </MoreContainer>
          </FlexContainer>

          <BestSellingDisplay>
            {
              products?.map((item, index) => (
                <Product item={item} key={index} />
              ))
            }

          </BestSellingDisplay>

          <SeeMoreContainer>
            <GButton outline onClick={()=>(navigate('/marketplace'))} label={"See More"} />
          </SeeMoreContainer>
        </ProductDisplay>
      </ProductFilterContainer>

      <CallToAction>
        <div>
          <div>
            <h4>Become a seller on Ginger</h4>
            <p>Browse more top selling products from top brands</p>
            <div>
              {/* <GButton label="Sign up now" onClick={() => navigate("/login")} /> */}
              <GButton
                outline
                onClick={() => navigate("/sell-on-ginger")}
                label={"Learn more"}
              />
            </div>
          </div>
        </div>
      </CallToAction>

      <Footer>
        <img src={FooterImage} />
      </Footer>
      <LineLoader loading={isLoading || isLoadingProducts} />
    </Container>
  );
};

export default memo(UnsignedCategories);

const Container = styled.main``;

const Breadcrumb = styled.section`
  padding: 2% 5%;
`;

const Banner = styled.section`
  width: 100%;
  padding: 0;
  position: relative;
`

const BannerImageHolder = styled.div`
  width: 100%;
  display: flex;

  img{
    width: 100%;
  }
`

const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p{
    color: var(--primary-color);
  }
`

const BannerAdd = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 55%;
  bottom: 10%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 1rem;
  border-radius: 20px 20px 0px 0px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8.5px);


`

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FirstText = styled.div`
  flex: 0.5;
  h6{
    color:white;
    flex: 0.5;
    font-size: 2.2rem;
  }
`

const SecondText = styled.div`
  flex: 0.5;
  width: 100%;
  p{
    color:white;
  }
`

const ChipContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5%;
  margin-top: 5%;
`;

const ProductFilterContainer = styled.section`
  display: flex;
  position: relative;
  gap: 2%;
  padding: 1% 5%;
`;


const ProductDisplay = styled.aside`
  flex: 1;
`;
const StoresDisplay = styled.div`
  max-width: 100vw;
  margin-top: 5%;
  display: flex;
  gap: 1.1rem;
  flex-wrap: wrap;
`;
const NewArrivalsDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
`;

const BestSellingDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  
`;


const CallToAction = styled.section`
  background-image: url(${CallToActionImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  position: relative;

  > div {
    position: absolute;
    left: 50%;
    bottom: -20vh;
    transform: translateX(-50%);
    width: 50vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-50);
    border: 1px solid var(--light-primary);
    > div {
      h4 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 1.3rem;
      }
      p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 1.6rem;
      }

      > div {
        display: flex;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        gap: 1rem;
      }
    }
  }
`;

const Footer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 25%;
  img {
    width: 100%;
  }
`;

const SectionTags = styled.h6`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 5% 0;
`;

const SeeMoreContainer = styled.div`
  margin: 10% auto;
  text-align: center;
  width: 200px;
`;

