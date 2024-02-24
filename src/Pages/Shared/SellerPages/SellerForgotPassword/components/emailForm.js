import React from "react";
import { styled } from "styled-components";
import { GTextField } from "../../../../../Ui_elements";

const EmailForm = ({ register, errors }) => {
  return (
    <>
      <Title>Forgot Password</Title>
      <Subtitle>
        Kindly input the email/phone number you registered with to reset
        password
      </Subtitle>
      <GTextField
        id="email"
        placeholder="Email / Phone number"
        inputType="text"
        name="email"
        register={register}
        error={!!errors.email}
        errorText={errors.email && errors.email.message}
      />
    </>
  );
};

export default EmailForm;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const Subtitle = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin: 14px 0 65px;
`;
