import styled from "styled-components";
import { GBreadCrumbs, Chip, GButton, Product } from "../../../Ui_elements";
import { memo } from "react";
import { categoriesData } from "./data";
import { useState } from "react";
import { SellerCard } from "../Components";
import { useNavigate } from "react-router-dom";
import CallToActionImg from "../../../Assets/Images/call-to-action.png";
import FooterImage from "../../../Assets/Images/footer.png";

const UnsignedCategories = () => {
  const [selectCat, setSelectCat] = useState(0);
  const navigate = useNavigate();
  return (
    <Container>
      <Breadcrumb>
        <GBreadCrumbs />
      </Breadcrumb>

      <Banner>
        <div>
          <h2>Eyelashes & Brows</h2>
          <p>
            Ginger’s wide network of local and international suppliers gives you
            access to all of your must-have brands and products in one place.
          </p>
        </div>
      </Banner>

      <ChipContainer>
        {categoriesData.map((item, index) => (
          <Chip
            activeIndex={selectCat}
            onClick={() => setSelectCat(index)}
            index={index}
            key={index}
          >
            {item}
          </Chip>
        ))}
      </ChipContainer>


      <ProductFilterContainer>
        <ProductDisplay>
          <SectionTags>Top Stores</SectionTags>
          <StoresDisplay>
            {[...Array(4)].map((_, index) => (
              <SellerCard key={index} />
            ))}
          </StoresDisplay>

          <SectionTags>New Arrivals</SectionTags>

          <NewArrivalsDisplay>
            {[...Array(5)].map((_, index) => (
              <Product key={index} />
            ))}
          </NewArrivalsDisplay>

          <SectionTags>Best Selling</SectionTags>

          <BestSellingDisplay>
            {[...Array(10)].map((_, index) => (
              <Product key={index} />
            ))}
          </BestSellingDisplay>

          <SeeMoreContainer>
            <GButton outline label={"See More"} />
          </SeeMoreContainer>
        </ProductDisplay>
      </ProductFilterContainer>

      <CallToAction>
        <div>
          <div>
            <h4>Become a seller on Ginger</h4>
            <p>Browse more top selling products from top brands</p>
            <div>
              <GButton label="Sign up now" onClick={() => navigate("/login")} />
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
    </Container>
  );
};

export default memo(UnsignedCategories);

const Container = styled.main``;

const Breadcrumb = styled.section`
  padding: 2% 5%;
`;

const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5%;
  height: 60vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
    url("https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center/cover no-repeat;
  background-color: aquamarine;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 2;
    text-align: center;
    h2 {
      font-size: 3rem;
      font-weight: 500;
      color: white;
    }

    p {
      text-align: center;
      color: white;
      width: 60%;
    }
  }
`;

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
  gap: 1.2rem;
  overflow-x: auto;
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
