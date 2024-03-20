import styled from "styled-components";
import {
  GBreadCrumbs,
  Chip,
  GAccordion,
  Product,
  GPagination,
  LineLoader,
  Empty,
} from "../../../Ui_elements";
import { memo } from "react";
import { useState, useRef, useEffect } from "react";
import Fade from "@mui/material/Fade";
import {
  BecomeSellerSection,
  InstaFooter,
  PriceFilter,
  TopStoresFilter,
} from "../Components";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useApiGet } from "../../../Hooks";
import { getBrands, getCategories, getProducts } from "../../../Urls";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_BASE_URL, priceOptions } from "../../../Utils";
import { useLocation, useNavigate } from "react-router-dom";
import { setActiveInitialSubCateogry } from "../../../Redux/Reducers";

const Categories = () => {

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const queryCat = queryParams.get("cat");
  const querySub = queryParams.get("sub_cat");
  const queryActive = queryParams.get("activeInit");
  const decodeQueryCat = JSON.parse(decodeURIComponent(queryCat))
  const decodeQuerySubCat = JSON.parse(decodeURIComponent(querySub))
  const decodeActiveInit = decodeURIComponent(queryActive)
  const inittialSubcat = decodeQuerySubCat

  const {
    data,
    isLoading: isLoadingCategory,
    refetch: fetchSubCategories,
  } = useApiGet(
    ["get-catefories"],
    () => getCategories({ name: decodeQueryCat?.name }),
    {
      enabled: true,
    }
  );


  const activeIndex = data ? data[0]?.subCategories.findIndex(item => item?._id === decodeActiveInit) : 0;

  const [selectCat, setSelectCat] = useState(activeIndex !== -1 ? activeIndex : 0);
  const [subCategory, setSubCategory] = useState(decodeQuerySubCat || null);
  const [subCategoryId, setSubCategoryId] = useState(decodeQuerySubCat?._id);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [openFilter, setOpenFilter] = useState(false);

  console.log(decodeQuerySubCat, "subCategory")

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    isFetching: isFetchingProducts,
    refetch: fetchProducts,
  } = useApiGet(
    ["get-products"],
    () =>
      getProducts({
        categoryId: decodeQueryCat?._id,
        subCategoryId: subCategoryId,
        brandId: selectedBrand?._id,
        price: selectedPrice,
      }),
    {
      enabled: false,
      placeholderData: (previousData) => previousData,
    }
  );


  useEffect(() => {
    setSubCategory(decodeQueryCat)
  },[])
  const {
    data: categoryBrands,
    isLoading: isLoadingCategoryBrands } =
    useApiGet(["get-brands"], () => getBrands());

  useEffect(() => {
    fetchSubCategories();
  }, [decodeQueryCat?.name]);


  useEffect(() => {
    if (data) {
      fetchProducts()
    }
  }, [data])
  
  useEffect(() => {
    if (data) {
      fetchProducts()
    }
  }, [selectCat, subCategory])
  
  useEffect(() => {
    if (data && selectedPrice) {
      fetchProducts()
    }
  }, [selectedPrice])
  
  useEffect(() => {
    if (data) {
      fetchProducts()
    }
  },[selectedBrand])




  return (
    <Container>
      <Breadcrumb>
        <GBreadCrumbs />
      </Breadcrumb>

      <Banner subCategory={subCategory && subCategory}>
        <div>
          <h2>{decodeQueryCat?.name}</h2>
          <p>Ginger’s wide network of local and international suppliers
            gives you access to all of your must-have brands
            and products in one place.
          </p>
        </div>
      </Banner>

      {data && (
        <ChipContainer>
          {data[0]?.subCategories?.map((item, index) => {
            return (
              <Chip
                activeIndex={selectCat}
                to={`/categories/${encodeURIComponent(decodeQueryCat?.name)}?cat=${encodeURIComponent(JSON.stringify(decodeQueryCat))}&sub_cat=${encodeURIComponent(JSON.stringify(item))}&activeInit=${decodeURIComponent(item?._id)}&init=${item?.name}`}
                onClick={() => {
                  setSelectCat(index);
                  setSubCategoryId(item?._id);
                  setSubCategory(item);
                }}
                index={index}
                key={index}
              >
                {item?.name}
              </Chip>
            )
          })}
        </ChipContainer>
      )}

      <SortWrapper>
        <SortBox
          onClick={() => setOpenFilter(!openFilter)}
          $isOpen={openFilter}
        >
          <SortTxt>Filter by</SortTxt>
          <ArrowForwardIosSharpIcon />
        </SortBox>
        {/* <SortBox>
                    <SortTxt>Sort by:</SortTxt>
                    <GDropdown
                        label={label}
                        setLabel={setLabel}
                        options={["All", "Last week"]}
                    />
                </SortBox> */}
      </SortWrapper>

      <ContentWrapper>
        <Fade
          in={openFilter}
          style={{ transformOrigin: "0 0 0" }}
          {...(openFilter ? { timeout: 500 } : {})}
        >
          <FilterBox $isOpen={openFilter}>
            <GAccordion
              title={"Price (₦)"}
              content={
                <PriceFilter
                  options={priceOptions}
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
                />
              }
            />
            <GAccordion
              title={"Top Stores"}
              content={
                <TopStoresFilter
                  options={categoryBrands}
                  selectedBrand={selectedBrand}
                  setSelectedBrand={setSelectedBrand}
                />
              }
            />
          </FilterBox>
        </Fade>
        <RightContent>
          {productsData?.length > 0 ? (
            <ProductsWrapper>
              {productsData?.map((item, index) => (
                <Product item={item} key={index} width={`17.3rem`} />
              ))}
            </ProductsWrapper>
          ) : (
            <Empty />
          )}
        </RightContent>
      </ContentWrapper>

      <PaginationContainer>
        <GPagination />
      </PaginationContainer>

      <BecomeSellerContainer>
        <BecomeSellerSection />
      </BecomeSellerContainer>
      <LineLoader loading={
        isLoadingProducts ||
        isFetchingProducts ||
        isLoadingCategory}
      />
      <InstaFooter />
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
    margin: 0 5%;
    height: 30rem;
    background: ${({ subCategory }) =>
    subCategory
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${IMAGE_BASE_URL}${subCategory?.images[0]}) center/cover no-repeat`
      : 'aquamarine'};
    
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
  width: 100% !important;
  gap: 62px;

  padding: 38px 0 108px 18px;
  transition: all 0.3s ease;
`;

const ProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
`;
