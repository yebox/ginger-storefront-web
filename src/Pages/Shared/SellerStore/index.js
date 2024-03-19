import styled from "styled-components";
import {
    GBreadCrumbs,
    Chip,
    Product,
    GButton,
    GPagination,
    GModal,

} from "../../../Ui_elements";
import { categoriesData } from './data';
import { DiscountBannerVector, Mail, ShareIcon } from "../../../Assets/Svgs";
import { useState, memo } from "react";
import { BecomeSellerSection, InstaFooter, DiscountBanner } from "../Components";
import { MinimumSpendBanner } from "./components/minimumSpendBanner";
import { LeftArrow, RightArrow } from "../../../Assets/Svgs";
import { Link } from "react-router-dom";
import { useApiGet } from "../../../Hooks";
import { getProducts } from "../../../Urls";


const SellerStore = () => {
    const [selectCat, setSelectCat] = useState(0)
    const [openModal, seOpenModal] = useState(true)


    // const {data: topProducts, isLoading} = useApiGet(
    //     ["get-top-products-seller"],
    //     () => getProducts({
    //         isTopSeller: true,
            
    //     })
    // )

    return (
        <Container>

            <GModal
                open={openModal}
                handleClose={() => seOpenModal(false)}
            >
                <ModalContainer>
                    <VectorContainer>
                        <DiscountBannerVector />
                    </VectorContainer>
                    <h5>Minimum Spend</h5>

                    <ModalItem>
                        <h6>Minimum Spend Information</h6>
                        <p>Please be advised that this seller has a Minimum Spend
                            requirement in place. The Minimum Spend represents the
                            minimum amount of money that must be spent on this
                            seller&apos;s products in a single transaction.
                        </p>
                    </ModalItem>

                    <ModalItem>
                        <h6>Why is there an Minimum Spend?</h6>
                        <p>The Minimum Spend is implemented by the seller to ensure that
                            each transaction meets a certain threshold, optimizing
                            the efficiency of their operations and resources.
                        </p>
                    </ModalItem>

                    <ModalItem>
                        <h6>What is the Minimum Spend for this product?</h6>
                        <p>The Minimum Spend for this seller is <span>Fifteen Thousand Naira (₦15,0000)</span>. Please ensure that your total purchase amount meets or exceeds this threshold to proceed with the transaction.</p>
                    </ModalItem>

                    <ModalItem>
                        <h6>What if I don&apos;t meet the Minimum Spend?</h6>
                        <p>If your purchase amount falls below the Minimum Spend,
                            you may not be able to proceed with the transaction. In such cases,
                            we recommend exploring additional products from this seller to meet
                            the Minimum Spend requirement.

                        </p>
                    </ModalItem>

                    <p>Thank you for your understanding and cooperation. If you have further questions or
                        concerns regarding the Minimum Spend, please don&apos;t hesitate to <Link>Contact Us</Link>.
                    </p>
                </ModalContainer>
            </GModal>
            <Breadcrumb>
                <GBreadCrumbs />
            </Breadcrumb>

            <Banner>
                <div>
                    <BannerDetail>
                        <img src="https://img.freepik.com/free-vector/gradient-hair-salon-logo-template_23-2148881845.jpg" />

                        <div>
                            <h6>KeraCare</h6>
                            <p>Ginger’s wide network of local and international
                                suppliers gives you access to all of your must-have
                                brands and products in one place.
                            </p>
                        </div>
                    </BannerDetail>

                    <ShareContainer>
                        <BannerMessage>
                            <Mail />
                            <p>Message Seller</p>
                        </BannerMessage>

                        <ShareHolder>
                            <ShareIcon />
                        </ShareHolder>
                    </ShareContainer>

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

            <ChipContainer>
                <MinimumSpendBanner />
            </ChipContainer>

            <DiscountContainer>
                <DiscountBanner />
            </DiscountContainer>

            <TopSellerHeader>
                <div>
                    <h4>Top sellers</h4>
                </div>
                <div>
                    <div>
                        <LeftArrow />
                    </div>
                    <div>
                        <RightArrow />
                    </div>
                </div>
            </TopSellerHeader>
            <ContentWrapper>
                <RightContent>
                    <ProductsWrapper>
                        {[...Array(5)].map((_, index) => (
                            <Product key={index} width={`17.3rem`} />
                        ))}
                    </ProductsWrapper>
                    <GButton label={"See more"} outline width={"172px"} />
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
                        {[...Array(12)].map((_, index) => (
                            <Product key={index} width={`17.3rem`} />
                        ))}
                    </ProductsWrapper>
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

export default memo(SellerStore)

const Container = styled.main`

`

const Breadcrumb = styled.section`
    padding: 2% 5%;
`

const Banner = styled.section`
    display: flex;
    align-items: flex-end;
    padding: 0 2rem 44px 2rem;
    margin: 0 5%;
    height: 60vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),
                url('https://img.pikbest.com/wp/202345/pose-3-girls-with-blue-colored-hair-posing-together_9578509.jpg!sw800') 
                center/cover no-repeat;
    background-color: aquamarine;
    
    >div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            color: white;
        }
    }
`;

const DiscountContainer = styled.div`
    margin: 5% 0;
`
const ShareContainer = styled.div`
    display: flex;
    align-items: flex-end;  
    gap: 10px;

`
const ShareHolder = styled.div`
    background: rgba(254, 254, 254, 0.70);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BannerMessage = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 100px;
    gap: 8px;
    background: rgba(254, 254, 254, 0.70);
    p{
        color: var(--black) !important;
    }

`
const BannerDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    img{
        width: 128px;
        height: 128px;
        border-radius: 10px;
    }

    h6{
        font-size: 2rem;
        font-style: normal;
        margin-bottom: 23px;
        color: white;
    }

    p{
        color: white;
        width: 60%;
    }
`


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


const TopSellerHeader = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;

  > div:nth-child(1) {
    h4 {
        font-family: Barlow;
      font-size: 2.5rem;
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
  h5{
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    color: var(--primary-color);
    margin-bottom: 30px;
  }
  a{
    color: var(--primary-color);
    text-decoration: underline;
  }
  /* justify-content: center; */
`

const VectorContainer = styled.div`
position: absolute;
top: 0;
left: 0;
`

const ModalItem = styled.div`
    h6{
        font-family: Barlow;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 20px;
    }
    span{
        font-weight: 500;
    }
`

// const ContactMessage = styled.p`
//     margin-top: "20px";
// `