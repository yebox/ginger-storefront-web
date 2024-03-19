import styled from "styled-components";
import gsap from "gsap";
import {
    GBreadCrumbs,
    Chip,
    Product,
    GButton,
    GPagination,
    GModal,

} from "../../../Ui_elements";
import { useEffect, useRef } from "react";
import { categoriesData } from './data';
import { DiscountBannerVector, DownArrow, GiftItem, Mail, ShareIcon } from "../../../Assets/Svgs";
import { useState, memo } from "react";
import { BecomeSellerSection, InstaFooter, DiscountBanner } from "../Components";
import { MinimumSpendBanner } from "./components/minimumSpendBanner";
import { LeftArrow, RightArrow } from "../../../Assets/Svgs";
import { Link } from "react-router-dom";
import { useApiGet } from "../../../Hooks";
import { getProducts } from "../../../Urls";



const timeline = gsap.timeline()


// const shakeAnimation = () => {
//     console.log("shake")
//     gsap.to('.DiscountItemContainer', {
//         duration: 0.1,
//         x: -10,
//         repeat: 5,
//         yoyo: true,
//         ease: 'power1.inOut',
//         onComplete: shakeAnimation, // Restart the animation on complete
//     });
// };

// const hoverAnimation = () => {
//     console.log("hover")
//     gsap.to('.DiscountItemContainer', {
//         width: '200px', // Adjust width according to your design
//         duration: 0.5,
//         ease: 'power2.inOut',
//     });
//     gsap.to('.DiscountDetails, .DownArrow', {
//         opacity: 1,
//         duration: 0.5,
//         delay: 0.5, // Delay to start after width animation
//     });
// };



const SellerStore = () => {
    const [selectCat, setSelectCat] = useState(0)
    const [openModal, seOpenModal] = useState(true)
    const discountItemRef = useRef()
    const discountDetails = useRef()
    const arrowRef = useRef() 
    const bigCardRef = useRef()
    // const {data: topProducts, isLoading} = useApiGet(
    //     ["get-top-products-seller"],
    //     () => getProducts({
    //         isTopSeller: true,

    //     })
    // )

    useEffect(() => {
        const ctx = gsap.context(() => {
            timeline.to(discountItemRef.current, {
                duration: 0.4,
                x: -10,
                repeat: 20,
                yoyo: true,
                ease: 'power1.inOut',
            })
        })

        return () => ctx.revert()
    }, [])

    const hoverAnimation = () => {
        gsap.fromTo(
            discountItemRef.current,
            {
                width: '100px'
            },
            {
                width: '310px',
                left: '78%',
                duration: 0.5,
                ease: 'power2.inOut'
            }
        );

        gsap.fromTo(
            discountDetails.current,
            {
                display: 'none',
                opacity: 0
            },
            {
                display: 'block',
                opacity: 1,
                duration: 0.3,
                delay: 0.4,
                ease: 'power2.inOut'
            }
        );
        gsap.fromTo(
            arrowRef.current,
            {
                display: 'none',
                opacity: 0
            },
            {
                display: 'block',
                opacity: 1,
                duration: 0.3,
                delay: 0.4,
                ease: 'power2.inOut'
            }
        );
    };


    const resetAnimation = () => {
        gsap.fromTo(discountItemRef.current, {
            width: '310px',
            left: '78%'
        },
            {
                width: 'fit-content',
                duration: 0.2,
                delay: 0.2,
                left: "90%",
                ease: 'power2.inOut',
            });

        gsap.to(
            discountDetails.current,
            {
                display: 'none',
                opacity: 0,
                duration: 0,
                ease: 'power2.inOut'
            }
        );

        gsap.to(
            arrowRef.current,
            {
                display: 'none',
                opacity: 0,
                duration: 0,
                ease: 'power2.inOut'
            }
        );
    };

    const displayBigCard = () => {
        gsap.fromTo(bigCardRef.current, {
            
        })
    }

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

            <BiggerDiscount
                ref={bigCardRef}
            >
                <Save>Save up to 20%</Save>
                <SaveDetail>Off every purchase above <span>₦100,000</span> made on KeraCare</SaveDetail>
            </BiggerDiscount>

            <DiscountItemContainer
                ref={discountItemRef}
                onMouseEnter={hoverAnimation}
                onMouseLeave={resetAnimation}
            >
                <DiscountItem
                    onMouseEnter={hoverAnimation}
                >
                    <GiftItem />
                </DiscountItem>
                <DiscountDetails
                    ref={discountDetails}
                >
                    <Exciting>Exciting offer!!!</Exciting>
                    <p>See what’s new</p>
                </DiscountDetails>
                <ArrowContainer ref={arrowRef}>
                    <DownArrow />
                </ArrowContainer>

            </DiscountItemContainer>
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
    position: relative;
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

const DiscountItemContainer = styled.section`
    position: sticky;
    top: 40vh;
    /* float: right; */
    left:90%;
    padding: 10px;
    border: 1px solid var(--primary-color);
    background-color: #FFECE9;
    width: fit-content;
    z-index: 50;
    border-radius: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;

`
const DiscountItem = styled.div`
    background-color: var(--black);
    width:54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DiscountDetails = styled.div`
    margin-left: 12px;
    margin-right: 22px;
    opacity: 0;
    transition: all 1s ease;
    display: none;

`;

const Exciting = styled.p`
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
`

const BiggerDiscount = styled.div`
    width: 320px;
    padding: 18px 34px;
    border: 0.9px solid #FFC6BB;
    border-radius: 12px;
    position: sticky;
    top: 27vh;
    left:78.5%;
    background-color: black;
`

const Save = styled.p`
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    color: var(--primary-color);
`

const SaveDetail = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: white;
    span{
        color:#FFC6BB;
    }
`

const ArrowContainer = styled.div`
    display: none;
`
// const ContactMessage = styled.p`
//     margin-top: "20px";
// `