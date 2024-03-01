import React from "react";
import { styled } from "styled-components";
import { GTextField, GSpacer } from "../../../../../Ui_elements";

const NewPassword = ({ errors, register }) => {
  return (
    <>
      <Title>Set New Password</Title>
      <Subtitle>Kindly set your new password</Subtitle>
      <GTextField
        id="password"
        placeholder="Password"
        inputType="password"
        name="password"
        register={register}
        error={errors.password}
        errorText={errors.password && errors.password.message}
        required
      />
      <GSpacer size={40} />
      <GTextField
        id="confirmPassword"
        placeholder="Confirm password"
        inputType="password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
        errorText={errors.confirmPassword && errors.confirmPassword.message}
        required
      />
    </>
  );
};

export default NewPassword;

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
