import React from "react";
import { styled } from "styled-components";
import { GTextField } from "../../../../Ui_elements";
import { GSpacer } from "../../../../Ui_elements";
import { devices } from "../../../../Utils";

const NewPassword = ({ errors, register }) => {
  return (
    <>
      <Title>Create New Password</Title>
      <Subtitle>
        Enter a new password. We suggest you make it strong and memorable.
      </Subtitle>
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
