import React, { useState } from "react";
import { styled } from "styled-components";
import bgImage from "../../../Assets/Images/forgot_auth_bg.png";
import { LogoWhiteRed } from "../../../Assets/Svgs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "./validation";
import { GSpacer, GButton, GStepper } from "../../../Ui_elements";
import { Link } from "react-router-dom";
import OtpVerify from "./components/otpVerify";
import EmailForm from "./components/emailForm";
import NewPassword from "./components/newPassword";

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [otpValue, setOtpValue] = useState(null);
  const [resetTimer, setResetTimer] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const timeUpHandler = (status) => {
    setIsTimeUp(status);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");

  const resendOtp = () => {
    // call endpoint here
    setIsTimeUp(false);
    setResetTimer(true);
    setTimeout(() => {
      setResetTimer(false);
    }, 2000);
  };

  const onSubmit = (values) => {
    activeStep == 1 ? console.log("1", values) : console.log("2", values);
    handleNext();
  };

  const btnDisabledHandler = () => {
    if (activeStep === 1) {
      return !emailValue;
    } else if (activeStep === 2) {
      return !otpValue;
    } else {
      return !passwordValue || !confirmPasswordValue;
    }
  };

  return (
    <Container>
      <BgImage src={bgImage} />
      <LogoWhite />
      <ContentWrapper>
        <GStepper totalSteps={3} activeStep={activeStep} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 1 && (
            <EmailForm errors={errors} register={register} />
          )}
          {activeStep === 2 && (
            <OtpVerify
              setOtpValue={setOtpValue}
              resendOtp={resendOtp}
              resetTimer={resetTimer}
              isTimeUp={isTimeUp}
              timeUpHandler={timeUpHandler}
            />
          )}
          {activeStep === 3 && (
            <NewPassword errors={errors} register={register} />
          )}
          <GSpacer size={90} />
          <GButton
            isLoading={isSubmitting}
            type={"submit"}
            label={"Next"}
            isDisabled={btnDisabledHandler()}
          />
          <AuthLinkTxt>
            Remember your password?{" "}
            <LoginUpTxt to={"/login"}>Sign In</LoginUpTxt>
          </AuthLinkTxt>
        </Form>
      </ContentWrapper>
    </Container>
  );
};

export default ForgotPassword;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #0e0e0e;
`;

const LogoWhite = styled(LogoWhiteRed)`
  width: 195px;
  height: 37.157px;
  flex-shrink: 0;
  z-index: 1;
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  filter: blur(0.7px) brightness(0.92);
  mix-blend-mode: hard-light;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 740px;
  flex-shrink: 0;
  background: #fff;
  padding: 57px;
  z-index: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 74px;
  width: 100%;
`;

const AuthLinkTxt = styled.p`
  align-self: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #b6b6b6;
  margin-top: 35px;
`;

const LoginUpTxt = styled(Link)`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
