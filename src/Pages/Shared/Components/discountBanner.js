import styled from 'styled-components'
import backgroundImage from "../../../Assets/Images/call-to-action.png"
import { DiscountBannerVector } from '../../../Assets/Svgs'

export const DiscountBanner = () => {
    return (
        <Container>
            <VectorContainer>
                <DiscountBannerVector />
            </VectorContainer>
            <ContentContainer>
                <Content>
                    <p>Exciting offer!!!</p>
                    <h6>Save up to 20%</h6>
                    <p> off every purchase above ₦100,000 made on KeraCare</p>
                </Content>
            </ContentContainer>
            <img src={backgroundImage} />
        </Container>
    )
}


const Container = styled.section`
    position: relative;
    width: 100%;
    background-color: var(--black);
    height: 30vh;
    display: flex;
    

    img{
        width: 100%;
        object-fit: cover;
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        filter: brightness(0.6);
    }
    
`

const ContentContainer = styled.div`
    width: 40%;
    padding-left: 5%;
    margin: auto 0;
    position: relative;
    p{
        color: white;
    }


`

const VectorContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`

const Content = styled.div`
    p:nth-child(1){
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
    }
    p:nth-child(2){
        font-size: 1rem;
        font-weight: 500;
    }
    h6{
        font-family: "Roboto Serif";
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        color: var(--primary-color);
    }
`