import React from "react";
import { styled } from "styled-components";
import VerificationInput from "react-verification-input";
import Countdown from "./countDown";
import { devices } from "../../../../Utils";

const OtpVerify = ({
  setOtpValue,
  isTimeUp,
  timeUpHandler,
  resendOtp,
  resetTimer,
}) => {
  const handleComplete = (value) => {
    if (value.length === 6) {
      setOtpValue(value);
    } else {
      setOtpValue(null);
    }
  };

  return (
    <Container>
      <Title>Enter Reset Code</Title>
      <Subtitle>Kindly input the reset code sent to your email</Subtitle>
      <VerificationInput
        placeholder={"0"}
        onChange={(value) => handleComplete(value)}
        autoFocus={true}
        // inputProps={{ disabled: !isTimeUp }}
      />
      {isTimeUp ? (
        <ResendTxt>
          Didn’t get the code. <span onClick={resendOtp}>Resend code</span>
        </ResendTxt>
      ) : (
        <SendOtpWrapper>
          <SentOtpTxt>We sent you a code. Resend code in</SentOtpTxt>
          <Countdown resetTimer={resetTimer} timeUpHandler={timeUpHandler} />
        </SendOtpWrapper>
      )}
    </Container>
  );
};

export default OtpVerify;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .vi {
    &:disabled {
      cursor: not-allowed;
    }
  }

  .vi__container {
    gap: 30px !important;
    width: unset;
  }

  .vi__character,
  .vi__character--selected,
  .vi__character--filled,
  .vi__character--inactive {
    width: 60px;
    border: none;
    outline: none;
    color: var(--Black-500, #151515);
    font-family: "Barlow";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 28px */
    background: transparent;
    border-bottom: 1px solid #e8e8e8;
    opacity: 1;
    transition: all 0.25s ease;
  }

  .vi__character--selected,
  .vi__character--filled {
    border-bottom: 1px solid #151515;
  }

  .vi__character--inactive,
  .vi__character--selected:not(.vi__character--filled) {
    opacity: 0.5;
  }

  @media ${devices.mobileL} {
    gap: 10px;

    .vi__container {
      height: 30px;
    }

    .vi__character,
    .vi__character--selected,
    .vi__character--filled,
    .vi__character--inactive {
      font-size: 16px;
    }
  }
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;

  @media ${devices.mobileL} {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin: 14px 0 65px;

  @media ${devices.mobileL} {
    font-size: 14px;
    margin: 10px 0 45px;
  }
`;

const ResendTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */

  & > span {
    color: var(--Primary-500, #ff4623);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    font-size: 14px;

    & > span {
      font-size: 14px;
    }
  }
`;

const SendOtpWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SentOtpTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;
