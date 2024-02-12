import styled, { keyframes } from "styled-components"
import { Button, Product, TextField, Chip } from "../../Ui_elements"
import React, { memo, useState } from "react"
import Vector from "../../Assets/Images/vector-background.png"
import AddPicture from "../../Assets/Images/ad-picture.png"
import CallToActionImg from "../../Assets/Images/call-to-action.png"
import { BlogCard, SellerCard } from "./Components"
import Partners from "../../Assets/Images/partners.png"
import HeroImage from "../../Assets/Images/hero-image.png"
import { CircleText, LeftArrow, Mail, RedRightArrow, RightArrow, } from "../../Assets/Svgs"
import { topSellerCategories } from "../../Utils"
import Footerimage from "../../Assets/Images/footer.png"
import { useNavigate } from "react-router-dom"
// import { Carousel } from "../../Ui_elements/Carousel/Carousel"
// import { UpArrow } from "../../Assets/Svgs"
const Home = () => {
    const navigate = useNavigate()
    const [selectCat, setSelectCat] = useState(0)

    const EndIcon = () => <EndIconContainer>
        <Mail />
        <p>Subscribe</p>
    </EndIconContainer>
    return (
        <Container>
            <Hero>
                <HeroDetails>
                    <p>Explore, Buy Wholesale, Sell on Ginger</p>
                    <h3>
                        Discover the convenience of
                    </h3>
                    <h3>
                        wholesale markeplace
                    </h3>
                    <ButtonContainer>
                        <Button
                            label="Sign up for free"
                            onClick={()=>navigate("/login")}
                        />

                        <Button
                            outline
                            onClick={() => navigate('/sell-on-ginger')}
                            label="Sell on ginger"
                        />
                    </ButtonContainer>
                </HeroDetails>
                <HeroImageContainer>
                    <div>
                        {/* <div/> */}
                        <p>world of limitless beauty options</p>
                    </div>
                </HeroImageContainer>
            </Hero>

            <Category>
                <CategoryHeader>
                    <h4>
                        Beauty procurement, simplified for you
                    </h4>
                    <div>
                        <p>Ginger’s wide network of local and international suppliers
                            gives you access to all of your must-have brands and
                            products in one place.
                        </p>
                    </div>

                </CategoryHeader>

                <CatergoryGridContainer>
                    <CatFirstBox>
                        <Barber>
                            <CatShopBottom>
                                <h6>Barbing</h6>

                                <Shopbutton>
                                    Shop Now
                                </Shopbutton>
                            </CatShopBottom>
                        </Barber>
                        <NailSkinContianer>
                            <Nails>
                                <CatShopBottom>
                                    <h6>Nails</h6>

                                    <Shopbutton>
                                        Shop Now
                                    </Shopbutton>
                                </CatShopBottom>
                            </Nails>
                            <Skin>

                                <CatShopBottom>
                                    <h6>Skin & Body</h6>

                                    <Shopbutton>
                                        Shop Now
                                    </Shopbutton>
                                </CatShopBottom>
                            </Skin>
                        </NailSkinContianer>
                    </CatFirstBox>
                    <CatSecondBox>
                        <CatShopBottom>
                            <h6>Braids & Weaves</h6>

                            <Shopbutton>
                                Shop Now
                            </Shopbutton>
                        </CatShopBottom>
                    </CatSecondBox>
                </CatergoryGridContainer>

                <ViewAllCat>
                    <Button
                        outline
                        label="See all categories"
                    />
                </ViewAllCat>
            </Category>

            <FeatureProductsContainer>
                <h4>Featured Products</h4>
                <FeaturedItemContainer>
                    {[...Array(4)].map((_, index) => (
                        <Product key={index} />

                    ))}
                </FeaturedItemContainer>
            </FeatureProductsContainer>

            <ViewAllCat>
                <Button
                    outline
                    label="Shop more"
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
                        <Button
                            label={"Shop now"}
                            outline
                        />
                    </div>
                </AdContainer>

                <CircleItem>
                    <div>
                        <CircleText />
                    </div>
                    <h5>01</h5>
                </CircleItem>
            </LargeAd>

            <CallToAction>
                <div>
                    <div>
                        <h4>Become a seller on Ginger</h4>
                        <p>Browse more top selling products from top brands</p>
                        <div>
                            <Button
                                label="Sign up now"
                                onClick={()=>navigate("/login")}
                            />
                            <Button
                                outline
                                onClick={() => navigate('/sell-on-ginger')}
                                label={"Learn more"}
                            />
                        </div>
                    </div>
                </div>
            </CallToAction>

            <TopSellerContainer>
                <TopSellerHeader>
                    <div>
                        <h4>Top sellers</h4>

                        <p>Browse more top selling products from top
                            brands and their categories
                        </p>
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

                <ChipContainer>
                    {topSellerCategories.map((item, index) => (
                        <Chip
                            activeIndex={selectCat}
                            onClick={() => setSelectCat(index)}
                            index={index}
                            key={index}
                        >{item}</Chip>
                    ))}
                </ChipContainer>

                <SellerCardsContainer>
                    {[...Array(8)].map((_, index) => (
                        <SellerCard key={index} />
                    ))}
                </SellerCardsContainer>
            </TopSellerContainer>

            <Wholesale>
                <img src={Vector} />
                <div>
                    <h4>All in one wholesale portal</h4>
                    <p>Start exploring thousands of brands and enjoy wholesale purchases</p>
                    <div>
                        <Button
                            label="Get started"
                            alternate
                        />
                        <Button
                            label="Learn more"
                            alternateOutline
                            onClick={() => navigate('/how-to-buy-wholesale')}

                        />
                    </div>
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
                        <BlogCard key={index} />

                    ))}
                </BlogBody>
            </BlogPosts>

            <PartnerSection>
                <img src={Partners} />
            </PartnerSection>

            <Subscribe>
                <div>
                    <h4>Subscribe to get 30% discount!</h4>
                    <TextField
                        endIcon={<EndIcon />}
                        placeholder={"Enter your email"}
                    />
                </div>
            </Subscribe>

            <Footer>
                <img src={Footerimage} />
            </Footer>
        </Container>
    )
}


export default memo(Home)





const Container = styled.main`
    width: inherit;
`

const Hero = styled.section`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    width: 100%;
    padding-left: 5%;
`

const HeroImageContainer = styled.div`
    /* background-color: green; */
    background-image: url(${HeroImage});
    width: 100%;
    flex: 1;
    height: 75vh;
    position: relative;
    
    img{
        height: 75vh;
        width: auto;
    }

    div{
        position: absolute;
        /* width: 500px; */
        bottom: 5%;
        right: 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20%;
        p{
            color: white;
        }
        div{
            width: 300px;
            display: inline;
            border: 1px solid white;
        }
    }
    
`
const HeroDetails = styled.div`
    flex: 0.5;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 23vh;

    position: relative;
    p {
        font-weight: 500;
    }
    h3 {
        background-color: white;
        position: absolute;
        padding: 10px 20px;
        white-space: nowrap;
        font-size: 4rem;
        font-weight: 500;
        z-index: 1;
        left: -3%;
        /* transform: translateX(-50%); */
    }
    h3:nth-child(3) {
        top: 35vh;
        
    }
    h3:nth-child(2) {
        bottom: 40vh; 
    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 80%;
`

const Category = styled.section`
    height: auto;
`
const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    /* width: 100%; */
    padding: 5%;
    h4{
        font-weight: 500;
        font-size: 2.5rem;
        flex: 0.8;
    }
    div{
        display: flex;
        align-items: center;
        padding-left: 2rem;
        height: 10vh;
        border-left: 1px solid var(--gray-200);

        p{
            width: 45%;
        }
    }

`

const CatergoryGridContainer = styled.div`
    display: flex;
    padding: 5%;
    gap: 5%;
    height: 100%;
`

const CatFirstBox = styled.div`
    flex: 0.5;
    height: 70vh;
`
const CatSecondBox = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    justify-content: flex-end;
    background-image: url('https://images.unsplash.com/photo-1682101853262-8c0344518d15?q=80&w=3401&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    background-color: aquamarine;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
        background-size: 105%; 
    }

    &::after {
        content: '';
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
        background-color: rgba(0, 0, 0, 0.3); /* Make the overlay slightly darker on hover */
    }
`;

const Barber = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 20px;
    height: 50px; /* Height of the component */
    padding: 1.2rem;
    margin-bottom: 20px;
    background-color: purple;
    height: 30vh; /* Initial height of the component */
    background-image: url('https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=3044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease; 
    
    &:hover {
        background-size: 105%; 
    }

    &::after {
        content: '';
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
    /* height: 100%; */
    background-color: aliceblue;
`

const Nails = styled.div`
    width: 100%;
    background-color: beige;
    height: 40vh;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    justify-content: flex-end;
    padding-bottom: 20px;
    background-image: url('https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &:hover {
        background-size: 100%; 
    }

    &::after {
        content: '';
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

`

const Skin = styled.div`
    width: 100%;
    flex-direction: column;
    position: relative;
    display: flex;
    padding: 1.2rem;
    /* padding-right: 2rem; */
    justify-content: flex-end;
    padding-bottom: 20px;
    background-image: url('https://images.unsplash.com/photo-1561228987-8e7379dde477?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;


    &:hover {
        background-size: 105%; 
    }

    &::after {
        content: '';
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
`

const CatShopBottom = styled.div`
    /* position: absolute; */
    z-index: 4;
    /* bottom: 1.2rem; */
    /* left: 1.2rem; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    /* background-color: red; */
    flex-wrap: wrap;
    margin: 0 auto;
    h6{
        font-size:2rem;
        color: white;
        font-weight: 500;
    }
`

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
    &:hover{
        transform: scale(1.05);
    }
`

const ViewAllCat = styled.div`
    width:178px;
    margin: 0 auto;
`
const FeatureProductsContainer = styled.section`
    width: 100%;
    padding: 5%;

    h4{
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 5%;
    }
`

const FeaturedItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LargeAd = styled.section`
    padding: 10% 5%;
    width: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Vector});
    background-position: center;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;

`
const AdContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
    /* gap:2rem; */
    h4{
        font-size: 3rem;
        font-family: "Roboto Serif";
        font-weight: 400;
    }
    >div:nth-child(1){
        /* flex: 0.5; */
    }
    >div:nth-child(2){
        /* flex: 0.5; */
        width: 320px;
        height: inherit;
        /* max-width: 400px; */
    }
`
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
    left: 45%;
    background-color: white;
    width: 255px;
    height: 255px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    /* Apply animation */
    animation: ${rotateAnimation} 10s linear infinite; /* Adjust duration and timing function as needed */

    div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    h5 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 6rem;
        color: var(--light-lavendar);
    }
`;



const CallToAction = styled.section`
    background-image: url(${CallToActionImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    position: relative;

    >div{
        position: absolute;
        left: 50%;
        bottom:-20vh;
        transform: translateX(-50%);
        width: 50vw;
        height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gray-50);
        border: 1px solid var(--light-primary);
        >div{
            h4{
                font-size: 2.5rem;
                font-weight: 500;
                margin-bottom: 1.3rem;
            }
            p{
                font-size: 1.1rem;
                text-align: center;
                margin-bottom: 1.6rem;

            }

            >div{
                display: flex;
                align-items: center;
                width: 70%;
                margin: 0 auto;
                gap: 1rem;
            }
        }
    }
`

const TopSellerContainer = styled.section`
    margin-top: 30vh;
    width: 100%;
    
    
`

const TopSellerHeader = styled.div`
    margin: 0 5%;
    display: flex;
    justify-content: space-between;

    >div:nth-child(1){
        h4{
            font-size: 2.5rem;
            font-weight: 500;
            /* margin-bottom: 1.3rem; */
        }
        p{
            width: 80%;
        }
    }

    >div:nth-of-type(2){
        display: flex;
        align-items: center;
        gap:10px;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            width:3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: var(--gray-100);
            cursor: pointer;
        }
    }
`

const ChipContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 5%;
    margin-top: 5%;
`

const SellerCardsContainer = styled.div`
   max-width: 100%;
   margin-top: 5%;
   display: flex;
   margin-left: 5%;
   justify-content: space-between;
   overflow-x: auto; /* Add this line */
`;


const Wholesale = styled.div`
    padding: 10% 5%;
    margin-top: 5%;
    position: relative;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        position: absolute;
        object-fit: cover;
        opacity: 0.3;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.8rem;
        position: relative;
        z-index: 2;
        h4{
            color:white;
            font-size: 3rem;
            font-weight: 500;
        }
        p{
            color:white;
            text-align: center;
        }
        >div{
            display: flex;
            gap:20px;
            width:60%;
            margin: 0 auto;
        }
    }

`

const BlogPosts = styled.section`

`



const BlogPostHeader = styled.div`
    width: 100%;
    display: flex;
    padding: 5%;
    justify-content: space-between;
    align-items: center;
    h4{
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 1.3rem;
    }

    div{
        display: flex;
        justify-content: center;
        cursor: pointer;
        p{
            color: var(--primary-color);
            transition: all 0.2s ease;
        }
        &:hover{
            p{
                font-weight: 600;
            }
        }
    }
`

const BlogBody = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 5%;
`

const PartnerSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5% 0;
    img{
        width: 80vw;
        height: auto;
    }
`

const Subscribe = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10% 0;
    h4{
        font-size:1.3rem;
        font-weight: 400;

    }
    >div{
        width: 30%;
        display: flex;
        gap: 4rem;
        flex-direction: column;
        align-items: center;
    }
`

const Footer = styled.section`
    display: flex;
    align-items: center;
    width:100%;
    margin: 5% 0;
    img{
        width:100%;
    }
`

const EndIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    p{
        font-size: 1rem;
        color: var(--black);
        font-weight: 500;
    }

`

