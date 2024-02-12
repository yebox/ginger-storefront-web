import { memo } from 'react'
import styled from 'styled-components'
import { Button } from '../../Ui_elements'
import { Accordion, GuideCard, TestimonialCard } from './Components'
import vector from "../../Assets/Images/vector-background.png"
import { LocationTag } from '../../Assets/Svgs'

const SellOnGinger = () => {
    return (
        <Container>
            <Banner>
                <img src={vector} />
                <div>
                    <p>How to become a seller on ginger</p>
                    <h4>Leverage the opportunity to scale your business through ginger</h4>
                </div>
            </Banner>

            <GuideContainer>
                <Guide>
                    <GuideActivities>
                        <div>
                            <GuideCard />
                            <GuideCard />
                            <GuideCard />
                        </div>
                        <div>
                            <GuideCard />
                            <GuideCard />
                            <GuideCard />
                        </div>
                    </GuideActivities>

                    <GuideImage>
                        <div>
                            <img
                                src='https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            />
                            <div>
                                <div>
                                    <LocationTag />
                                    <div>
                                        <b>Where our sellers can be located</b>
                                        <p>From pixel-perfect icons and scalable vector graphics,
                                            to full user flows and interactive prototypes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GuideImage>
                </Guide>
            </GuideContainer>


            <TestimonyContainer>
                <h6>Do not take our words for it.</h6>
                <h4>What other sellers are saying!</h4>

                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />

                </div>
            </TestimonyContainer>

            <AccordionContainer>
                <h4>FAQ</h4>
                <Accordion
                    title={"How to sell on ginger"}
                />
                <Accordion
                    title={"Can i have multiple accounts"}
                />
                <Accordion
                    title={"Is selling on ginger free"}
                />
                <Accordion
                    title={"How do i create a seller store"}
                />
            </AccordionContainer>

            <Footer>
                <div>
                    <p>Get wider reach for your business</p>
                    <h4>You have everything you need, Start selling on ginger.</h4>
                    <Button
                        alternate
                        width={"11rem"}
                        label="Get started"
                    />

                </div>
            </Footer>
        </Container>
    )
}

export default memo(SellOnGinger)


const Container = styled.main`

`


const GuideContainer = styled.section`
    padding: 10%;
    h4{
        font-weight: 500;
        font-size: 2.5rem;
        margin-bottom: 5%;
    }
`
const GuideActivities = styled.div`
    height: 100%;
    flex: 0.5;
    display:flex;

    >div:nth-child(1){
        height: 100%;
        flex: 0.5;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }
    >div:nth-child(2){
        height: 100%;
        flex: 0.5;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }
`

const Guide = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-between;
`

const GuideImage = styled.div`
    height: 100%;
    flex: 0.5;
    position: relative;
    /* display: flex; */
    width: 100%;
    background-color: aqua;
    /* justify-content: flex-end; */
    >div{
        position: absolute;
        justify-self: flex-end;
        right: 0;
        bottom: 0;
        height: 100%;
        img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
        >div{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60%;
            background-color: white;
            >div{
                padding: 25px;
                display: flex;
                gap: 10px;
                b{
                    margin-bottom: 8px;
                }
                p{
                    font-size: 0.8rem;
                    color: var(--gray-400);
                }
            }
            
        }
    }

`

const Banner = styled.div`
    position: relative;
    background-color: var(--black);
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
        padding: 10%;
        z-index: 2;
        width: 100%;
        height: inherit;
        background-color: rgba(0, 0, 0, 0.5);
        h4{
            color:white;
            font-size: 3rem;
            font-weight: 500;
            width: 60%;
            text-align: center;
        }
        p{
            color:white;
            text-align: center;
        }
    }

`


const Footer = styled.div`
    position: relative;
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        position: relative;
        padding: 10%;
        background-color: var(--black);
        z-index: 2;
        width: 100%;
        height: inherit;
        h4{
            color:white;
            font-size: 3rem;
            font-weight: 500;
            width: 70%;
            text-align: center;
        }
        p{
            color:white;
            text-align: center;
        }
    }
`

const TestimonyContainer = styled.section`
    padding: 10%;

    h6{
        text-align: center;
        color: var(--primary-color);
    }
    
    h4{
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
    }

    >div{
        margin-top: 5%;
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }

`


const AccordionContainer = styled.section`
    padding: 10% 15%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h5{
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
`