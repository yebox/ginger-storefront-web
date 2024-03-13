import React from 'react'
import styled from 'styled-components';
import { GButton } from '../Button/button';
import { useNavigate } from 'react-router-dom';


const Error404Page = () => {
    const navigate = useNavigate()


    return (
        <Page404Section>
            <Container >
                <Row>
                    <Column>
                        <FourZeroFourBg>
                            <Text404>404</Text404>
                        </FourZeroFourBg>
                        <ContentBox404>
                            <Heading404>Looks like you&apos;re lost</Heading404>
                            <Des>the page you are looking for is not available!</Des>
                            <ButtonContainer>
                                <GButton
                                    label={"Go back home"}
                                    width={"200px"}
                                    onClick={()=>navigate('/')}
                                />
                            </ButtonContainer>

                        </ContentBox404>
                    </Column>
                </Row>
            </Container>
        </Page404Section>
    );
};

export default Error404Page;



const Page404Section = styled.section`
  padding: 40px 0;
  background: #fff;
`;

const Des = styled.p`
    margin: 20px 0;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  text-align: center;
  flex-grow: 1;
`;

const FourZeroFourBg = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
`;


const Text404 = styled.h1`
  font-size: 6rem;
`;


const ContentBox404 = styled.div`
  margin-top: -50px;
`;


const Heading404 = styled.h3`
  font-size: 80px;
`;
