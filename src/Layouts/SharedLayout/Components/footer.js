import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { Facebook, Instagram, LinkedIn, Logo, Twitter } from "../../../Assets/Svgs"
export const Footer = () => {
    return (
        <Container>
            <FooterBody>
                <LogoContainer>
                    <Logo />
                    <p>Building the best and more efficient product for businesses</p>
                </LogoContainer>

                <LinksContainer>
                    <BottomItems>
                        <h6>Product</h6>
                        <Link>Overview</Link>
                        <Link>Features</Link>
                        <Link>Solutions</Link>
                        <Link>Tutorials</Link>
                        <Link>Pricing</Link>
                    </BottomItems>

                    <BottomItems>
                        <h6>Company</h6>
                        <Link>About us</Link>
                        <Link>Careers</Link>
                    </BottomItems>


                    <BottomItems>
                        <h6>Resources</h6>
                        <Link>Blog</Link>
                        <Link>Newsletter</Link>
                        <Link>Events</Link>
                        <Link>Help centre</Link>
                    </BottomItems>
                </LinksContainer>

                <div>
                    <h6>
                        Stay up to date
                    </h6>
                    <p>Join over 5,000+ people in our community!</p>
                </div>
            </FooterBody>

            <FooterBottom>
                <p>All rights reserved © 2023 Ginger Technologies, Inc. </p>

                <IconContainer>
                    <Icon>
                        <Instagram />
                    </Icon>
                    <Icon>
                        <Facebook />
                    </Icon>
                    <Icon>
                        <Twitter />
                    </Icon>
                    <Icon>
                        <LinkedIn />
                    </Icon>
                </IconContainer>

            </FooterBottom>

        </Container>
    )
}


const Container = styled.footer`
    height: auto;
`

const Icon = styled.div`
    padding: 8px;
    background-color: var(--gray-200);
    border-radius: 6px;
    transition: all 0.5s ease-in-out;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: gray;
    }
`

const IconContainer = styled.aside`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const FooterBottom = styled.section`
    width: 100%;
    background-color: var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3% 5%;
`

const FooterBody = styled.div`
    padding: 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 30%;
`
const BottomItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const BigLogo = styled(Logo)`
    transform: scale(1.2);
`

const LogoContainer = styled.div`
    p{
        margin-top: 10px;
    }
`