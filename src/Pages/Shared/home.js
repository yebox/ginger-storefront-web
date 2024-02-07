import { styled } from "styled-components"
import { Button } from "../../Ui_elements"
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
                    <img
                        src={HeroImage}
                    />
                    <div>
                        {/* <div/> */}
                        <p>world of limitless beauty options</p>
                    </div>
                </HeroImageContainer>
            </Hero>
        </Container>
    )
}


export default Home


const Container = styled.main`
    height: 70vh;
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
    width: 100%;
    flex: 0.5;
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
        left: -5%;
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
`