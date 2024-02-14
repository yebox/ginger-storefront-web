import styled from 'styled-components'
import {
    GBreadCrumbs,
    Chip,
    GButton,
    GAccordion,
    Product,
    GDropdown,
    GPagination,
} from '../../../Ui_elements'
import { memo } from 'react';
import { categoriesData } from './data';
import { useState } from 'react';
import Fade from "@mui/material/Fade";
import {
    BecomeSellerSection,
    InstaFooter,
    PriceFilter,
    TopStoresFilter
} from '../Components';
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";



const Categories = () => {
    const [selectCat, setSelectCat] = useState(0)
    const [label, setLabel] = useState("All");
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <Container>
            <Breadcrumb>
                <GBreadCrumbs />
            </Breadcrumb>

            <Banner>
                <div>
                    <h2>Eyelashes & Brows</h2>
                    <p>Ginger’s wide network of local and international suppliers
                        gives you access to all of your must-have brands
                        and products in one place.
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

            <SortWrapper>
                <SortBox onClick={() => setOpenFilter(!openFilter)} $isOpen={openFilter}>
                    <SortTxt>Filter by</SortTxt>
                    <ArrowForwardIosSharpIcon/>
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
                    in={openFilter}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(openFilter ? { timeout: 500 } : {})}
                >
                    <FilterBox $isOpen={openFilter}>
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

            <PaginationContainer>
                <GPagination />
            </PaginationContainer>

            <BecomeSellerContainer>
                <BecomeSellerSection />
            </BecomeSellerContainer>

            <InstaFooter />
        </Container>
    )
}

export default memo(Categories)

const Container = styled.main`

`

const Breadcrumb = styled.section`
    padding: 2% 5%;
`

const Banner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5%;
    height: 60vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
                url('https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') 
                center/cover no-repeat;
    background-color: aquamarine;
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:2rem;
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

const SortWrapper = styled.div`
  display: flex;
  margin-top: 50px;
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


const BecomeSellerContainer = styled.div`
    margin-bottom: 30%;
`



const ChipContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 5%;
    margin-top: 5%;
`


const PaginationContainer = styled.div`
    width: 100%;
    margin-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
`;