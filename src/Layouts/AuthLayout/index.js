import React from "react";
import { styled } from "styled-components";
import mainAuthBg from "../../Assets/Images/sign_up.png";
import authGradient from "../../Assets/Images/sign_up_gradient.png";
import { WhiteLogo } from "../../Assets/Svgs";

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <LeftSection>
        <BgImage src={mainAuthBg} />
        <AuthBgGradient src={authGradient} />
        <AuthWhiteLogo />
        <LeftTextWrapper>
          <LeftTitle>Infinite beauty awaits</LeftTitle>
          <LeftSubtitle>
            Building the best and more efficient product for businesses
          </LeftSubtitle>
        </LeftTextWrapper>
      </LeftSection>
      
      <RightSection>
        <ContentWrapper>{children}</ContentWrapper>
      </RightSection>
    </Container>
  );
};

export default AuthLayout;

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

const AuthWhiteLogo = styled(WhiteLogo)`
  width: 162px;
  height: 32px;
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
  flex-direction: column;
  gap: 10px;
  z-index: 1;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 53%;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 579px;
`;
