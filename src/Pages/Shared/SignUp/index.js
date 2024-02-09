import React from "react";
import styled from "styled-components";
import { AppleIcon, GoogleIcon } from "../../../Assets/Svgs";
import { Button } from "../../../Ui_elements";
import { TextField } from "../../../Ui_elements/TextField";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./validation";
import { Link } from "react-router-dom";
import GSpacer from "../../../Ui_elements/Spacer";
import { GSelectField } from "../../../Ui_elements/SelectField";

const countryData = [
  { label: "Nigeria", value: "nigeria" },
  { label: "Ghana", value: "ghana" },
  { label: "China", value: "china" },
];

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = () => {};

  return (
    <>
      <Title>Sign Up</Title>
      <Subtitle>
        Create an account to keep track of your orders and pay for orders.
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          placeholder="Email / Phone number"
          inputType="email"
          name="email"
          register={register}
          error={errors.email}
          errorText={errors.email && errors.email.message}
          required
        />
        <GSpacer size={32} />
        <TextField
          id="fullName"
          placeholder="Full name"
          inputType="fullName"
          name="fullName"
          register={register}
          error={errors.fullName}
          errorText={errors.fullName && errors.fullName.message}
          required
        />
        <GSpacer size={32} />
        <TextField
          id="password"
          placeholder="Password"
          inputType="password"
          name="password"
          register={register}
          error={errors.password}
          errorText={errors.password && errors.password.message}
          required
        />
        <GSpacer size={32} />
        <Controller
          name="country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <GSelectField
              {...field}
              placeholder="Select a country"
              options={countryData}
              id="country"
              searchable={true}
              isError={!!errors.subCategoryId}
            />
          )}
        />
        <TermsWrapper></TermsWrapper>
        <BtnWrapper>
          <Button
            width={"60%"}
            isLoading={isSubmitting}
            type={"submit"}
            label={"Sign up for free"}
          />
          <OrTxt>or</OrTxt>
          <GoogleSignupBtn>
            <GoogleIcon />
          </GoogleSignupBtn>
          <AppleIcon />
        </BtnWrapper>
      </Form>
      <AuthLinkTxt>
        Already have an account? <LoginUpTxt>Log in</LoginUpTxt>
      </AuthLinkTxt>
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
  color: var(--Primary-500, #ff4623);
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #626262;
  text-align: left;
  width: 85%;
`;

const Form = styled.form`
  margin: 77px 0 24px;
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

const TermsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 58px;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 32px;

  & > svg {
    width: 65.083px;
    height: 55px;
    flex-shrink: 0;
  }
`;

const OrTxt = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const GoogleSignupBtn = styled.div`
  display: flex;
  align-items: center;
  width: 65.083px;
  height: 55px;
  padding: 12.833px 18.085px 12.833px 18.333px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0.917px solid var(--Black-100, #b6b6b6);

  & > svg {
    width: 28.665px;
    height: 29.333px;
    flex-shrink: 0;
  }
`;

const LoginUpTxt = styled(Link)`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
