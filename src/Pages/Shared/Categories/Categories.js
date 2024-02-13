import styled from "styled-components";
import {
  GBreadCrumbs,
  Chip,
  GPagination,
  GButton,
  Product,
} from "../../../Ui_elements";
import { memo } from "react";
import { categoriesData } from "./data";
import { useState } from "react";
import { DownArrow } from "../../../Assets/Svgs";
import { FilterDropdown } from "../Components";
import { Pricefilter, TopStores } from "../Components";
import { useNavigate } from "react-router-dom";
import CallToActionImg from "../../../Assets/Images/call-to-action.png";
import FooterImage from "../../../Assets/Images/footer.png";

const Categories = () => {
  const [selectCat, setSelectCat] = useState(0);
  const [openFilter, setopenFilter] = useState(false);
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
      <FilterContainer>
        <FilterComp onClick={() => setopenFilter(!openFilter)}>
          <p>Filter by</p>
          <div>
            <DownArrow />
          </div>
        </FilterComp>
        <FilterComp onClick={() => setopenFilter(!openFilter)}>
          <p>Sort by</p>
          <div>
            <DownArrow />
          </div>
        </FilterComp>
      </FilterContainer>

      <ProductFilterContainer>
        <AsideFilters isOpen={openFilter}>
          <FilterDropdown title={"Price (₦)"} content={<Pricefilter />} />
          <FilterDropdown title={"Top Stores"} content={<TopStores />} />
        </AsideFilters>
        <ProductDisplay>
          <ItemDisplay>
            {[...Array(10)].map((_, index) => (
              <Product key={index} />
            ))}
          </ItemDisplay>

          <PaginationContainer>
            <GPagination />
          </PaginationContainer>
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

export default memo(Categories);

const Container = styled.main``;

const Breadcrumb = styled.section`
  padding: 2% 5%;
`;

const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),
    url("https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center/cover no-repeat;
  background-color: aquamarine;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5%;
    height: 60vh;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.1)
      ),
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

const FilterContainer = styled.section`
  width: auto;
  margin: 5%;
  border-bottom: 1px solid var(--gray-200);
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const ProductFilterContainer = styled.section`
  display: flex;
  position: relative;
  gap: 2%;
  padding: 5%;
`;

const AsideFilters = styled.aside`
  position: sticky;
  top: 50px;
  left: 0;
  padding-right: 20px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  border-right: 1px solid var(--gray-200);
  transition: width 0.3s ease;
`;

const ProductDisplay = styled.aside`
  flex: 1;
`;
const ItemDisplay = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.3rem, 1fr));
  gap: 15px;
`;

const PaginationContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComp = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  p {
    color: var(--gray-300);
  }

  div {
    cursor: pointer;
  }
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
