import React, { useState } from "react";
import { styled } from "styled-components";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { CaretLeft } from "../../../Assets/Svgs";
import {
  GBreadCrumbs,
  GAccordion,
  GButton,
  GDropdown,
  GSpacer,
  Product,
} from "../../../Ui_elements";
import PriceFilter from "./components/priceFilter";
import TopStoresFilter from "./components/topStores";
import Fade from "@mui/material/Fade";
import { BecomeSellerSection } from "../Components/becomeSellerSection";
import RelatedItems from "./components/relatedItems";
import InstaFooter from "../Components/instaFooter";

const MarketPlace = () => {
  const [label, setLabel] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <HeaderWrapper>
        <LeftSect>
          <CaretLeft />
          <Title>Marketplace</Title>
        </LeftSect>
        <GBreadCrumbs />
      </HeaderWrapper>
      <SortWrapper>
        <SortBox onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <SortTxt>Filter by</SortTxt>
          <ArrowForwardIosSharpIcon />
        </SortBox>
        <SortBox>
          <SortTxt>Sort by:</SortTxt>
          <GDropdown
            label={label}
            setLabel={setLabel}
            options={["All", "Last week"]}
          />
        </SortBox>
      </SortWrapper>
      <ContentWrapper>
        <Fade
          in={isOpen}
          style={{ transformOrigin: "0 0 0" }}
          {...(isOpen ? { timeout: 500 } : {})}
        >
          <FilterBox $isOpen={isOpen}>
            <GAccordion title={"Price (₦)"} content={<PriceFilter />} />
            <GAccordion title={"Top Stores"} content={<TopStoresFilter />} />
          </FilterBox>
        </Fade>
        <RightContent>
          <ProductsWrapper>
            {[...Array(12)].map((_, index) => (
              <Product key={index} width={`17.3rem`} />
            ))}
          </ProductsWrapper>
          <GButton label={"See more"} outline width={"172px"} />
        </RightContent>
      </ContentWrapper>
      <BecomeSellerSection />
      <RelatedItems />
      <GSpacer size={100} />
      <InstaFooter />
    </Container>
  );
};

export default MarketPlace;

const Container = styled.div`
  margin-top: 40px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  margin-bottom: 30px;
`;

const LeftSect = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 20px 5%;
  border-radius: 12px 12px 0px 0px;
  border-bottom: 1px solid #f1f1f1;
`;

const SortBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;

  & > svg {
    transform: rotate(90deg);
    transform: ${({ $isOpen }) =>
      $isOpen ? `rotate(270deg)` : "rotate(90deg)"};
    width: 14px;
    transition: all 0.25s ease;
  }
`;

const SortTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 0 5%;
`;

const FilterBox = styled.div`
  display: inline-flex;
  padding: ${({ $isOpen }) => ($isOpen ? `43px 30px 40px 0` : "0px")};
  width: ${({ $isOpen }) => ($isOpen ? `320px` : "0px")};
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-right: 1px solid #f1f1f1;
  transition: all 0.25s ease;

  & > div {
    width: 100%;
    visibility: ${({ $isOpen }) => ($isOpen ? `show` : "hidden")};
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
  padding: 38px 0 108px 18px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 58px 45px;
`;
