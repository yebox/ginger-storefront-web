import { styled } from "styled-components"
import { Button } from "../../Ui_elements"
import React, {memo} from "react"

import HeroImage from "../../Assets/Images/hero-image.png"
const Home = () => {
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
                        />

                        <Button
                            outline
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
            </Category>
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
    /* display: flex;
    flex-direction: column; */
    /* padding: 1.2rem; */
    /* justify-content: flex-end; */
    background-image: url('https://images.unsplash.com/photo-1682101853262-8c0344518d15?q=80&w=3401&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease;
    position: relative; /* Ensure positioning context for pseudo-elements */
    
    &:hover {
        background-size: 105%; /* Zoom in the background image on hover */
    }

    &::after {
        content: '';
        position: absolute;
        top: 0; /* Position at the top of the box */
        left: 0;
        width: 100%;
        height: 100%; /* Cover the entire box */
        background-color: rgba(0, 0, 0, 0); /* Dark overlay with initial transparency */
        z-index: 1; /* Ensure overlay is above background image */
        transition: background-color 0.3s ease; /* Add transition for smooth effect */
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
    transition: all 0.3s ease; /* Add transition for smooth effect */
    
    &:hover {
        background-size: 105%; /* Zoom in the background image on hover */
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0); /* Initial transparent overlay */
        z-index: 1;
        transition: background-color 0.3s ease; /* Add transition for smooth effect */
    }

    &:hover::after {
        background-color: rgba(0, 0, 0, 0.3); /* Dark overlay on hover */
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

`

const Skin = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    padding: 1.2rem;
    justify-content: flex-end;
    padding-bottom: 20px;
    background-image: url('https://images.unsplash.com/photo-1561228987-8e7379dde477?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;
`

const CatShopBottom = styled.div`
    position: absolute;
    z-index: 4;
    bottom: 1.2rem;
    left: 1.2rem;
    width: 94%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
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