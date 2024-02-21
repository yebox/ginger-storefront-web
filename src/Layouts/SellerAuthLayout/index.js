import React from "react";
import { styled } from "styled-components";
import authImage from "../../Assets/Images/seller_signup.png";
import authGradient from "../../Assets/Images/sign_up_gradient.png";
import { Logo } from "../../Assets/Svgs";

export const SellerAuthLayout = ({ children }) => {
  return (
    <Container>
      <LeftSection>
        <BgImage src={authImage} />
        <AuthBgGradient src={authGradient} />
        <Logo/>
        <LeftTextWrapper>
          <LeftTitle>Reach independent businesses across the world</LeftTitle>
          <LeftSubtitle>
          Sign up to start selling in Ginger B2B marketplace. No set-up fees. No commitments.
          </LeftSubtitle>
        </LeftTextWrapper>
      </LeftSection>
      <RightSection>
        <ContentWrapper>{children}</ContentWrapper>
      </RightSection>
    </Container>
  );
};



const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 47%;
  padding: 64px 80px;
  overflow: hidden;
`;


const AuthBgGradient = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const LeftTextWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 80px 64px 80px;
  z-index: 1;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

const LeftTitle = styled.h2`
  font-size: 52px;
  font-weight: 500;
  line-height: 62px;
  letter-spacing: 0em;
  text-align: left;
  color: #fefefe;
`;

const LeftSubtitle = styled.p`
  font-family: Barlow;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #fefefe;
`;

const RightSection = styled.div`
  position: relative;
  width: 53%;
  background-color: #FFFBF7;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 740px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 56px 80px;
  background-color: white;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 33%;
  transform: translate(-50%, -50%);
`;
