import React from "react";
import styled from "styled-components";
import { GoogleIcon } from "../../Assets/Svgs";
import { Button } from "../../Ui_elements";

const SignUp = () => {
  return (
    <>
      <Title>Sign Up</Title>
      <Subtitle>
        Create an account to keep track of your orders and pay for orders.
      </Subtitle>
      <FormWrapper>
        <Button label={"Sign up for free"} />
      </FormWrapper>
      <AuthLinkTxt>
        Already have an account? <span>Log in</span>
      </AuthLinkTxt>
      <OrWrapper>
        <Divider />
        <OrTxt>or</OrTxt>
        <Divider />
      </OrWrapper>
      <GoogleSignupBtn>
        <GoogleIcon />
        Sign up with Google
      </GoogleSignupBtn>
      <AuthLinkTxt>
        Are you a brand? <span>Sign up to sell on Ginger</span>
      </AuthLinkTxt>
    </>
  );
};

export default SignUp;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff4623;
`;

const Subtitle = styled.p`
  margin-top: 28px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #626262;
  text-align: left;
`;

const FormWrapper = styled.div`
  margin: 96px 0 40px;
`;

const SignUpBtn = styled.div`
  padding: 16px 24px;
  height: 55px;
  width: 100%;
  background: #151515;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #ffffff;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`;

const AuthLinkTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #b6b6b6;

  & > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff4623;
    cursor: pointer;
  }
`;

const OrWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin: 58px 0 48px;
`;

const OrTxt = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const Divider = styled.span`
  flex-grow: 1;
  border-top: 1px solid #e8e8e8;
`;

const GoogleSignupBtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 13px;
  border: 0.92px solid #b6b6b6;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #151515;
  margin-bottom: 40px;
`;
