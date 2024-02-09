import React from "react";
import styled from "styled-components";
import { AppleIcon, GoogleIcon } from "../../../Assets/Svgs";
import { Button } from "../../../Ui_elements";
import { TextField } from "../../../Ui_elements/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./validation";
import { Link } from "react-router-dom";
import GSpacer from "../../../Ui_elements/Spacer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = () => {};

  return (
    <>
      <Title>Log In</Title>
      <Subtitle>
        Sign in to view your personal information and check up on your recent
        orders
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          placeholder="Email / Phone number"
          inputType="text"
          name="email"
          register={register}
          error={errors.email}
          errorText={errors.email && errors.email.message}
          required
        />
        <GSpacer size={40} />
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
        <ForgotPassword>Forgot password?</ForgotPassword>
        <BtnWrapper>
          <Button
            width={"60%"}
            isLoading={isSubmitting}
            type={"submit"}
            label={"Login"}
          />
          <OrTxt>or</OrTxt>
          <GoogleSignupBtn>
            <GoogleIcon />
          </GoogleSignupBtn>
          <AppleIcon />
        </BtnWrapper>
      </Form>
      <AuthLinkTxt>
        Don’t have an account? <SignUpTxt>Sign up</SignUpTxt>
      </AuthLinkTxt>
    </>
  );
};

export default Login;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 110%;
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
`;

const ForgotPassword = styled(Link)`
  display: block;
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin: 24px 0 58px;
  width: fit-content;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  & > svg {
    width: 65.083px;
    height: 55px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const OrTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

const SignUpTxt = styled(Link)`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
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
  cursor: pointer;

  & > svg {
    width: 28.665px;
    height: 29.333px;
    flex-shrink: 0;
  }
`;
