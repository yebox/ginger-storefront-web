import React from "react";
import styled from "styled-components";
import { AppleIcon, GoogleIcon } from "../../../Assets/Svgs";
import {
  GButton,
  GSpacer,
  GSelectField,
  GCheckbox,
  GTextField,
} from "../../../Ui_elements";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./validation";
import { Link, useNavigate } from "react-router-dom";
import { countryData } from "./data";
import { countries } from "../../../Utils";
import { useApiSend } from "../../../Hooks/api";
import { registerUser } from "../../../Urls";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const { mutate, isPending } = useApiSend(
    registerUser,
    (data) => {
      
      dispatch(setUser(data))
      toast.success(`Account created successfully.`)
      navigate("/")
    },
    (error) => {
      toast.error(error.message);
    }
  );

  const handleTermsNav = (e) => {
    e.stopPropagation();
    navigate("/");
  };

  const onSubmit = (data) => {
    const formatPhoneNumber = (number = data.phoneNumber) => {
      let newNumber = number.split("")
      newNumber[0] = "+234"
      return newNumber.join("")
    }

    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: formatPhoneNumber(),
      password: data.password,
      country: data.country.value,
      role: "buyer",
    };
    mutate(body);
  };
  // console.log({ errors });

  return (
    <>
      <Title>Sign Up</Title>
      <Subtitle>
        Create an account to keep track of your orders and pay for orders.
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NameInputWrapper>
          <GTextField
            id="firstName"
            placeholder="First name"
            inputType="firstName"
            name="firstName"
            register={register}
            error={!!errors.firstName}
            errorText={errors.firstName && errors.firstName.message}
            required
          />
          <GTextField
            id="lastName"
            placeholder="Last name"
            inputType="lastName"
            name="lastName"
            register={register}
            error={!!errors.lastName}
            errorText={errors.lastName && errors.lastName.message}
            required
          />
        </NameInputWrapper>
        <GSpacer size={32} />
        <GTextField
          id="email"
          placeholder="Email"
          inputType="text"
          name="email"
          register={register}
          error={!!errors.email}
          errorText={errors.email && errors.email.message}
          required
        />
        <GSpacer size={32} />

        <GTextField
          id="phoneNumber"
          placeholder="Phone number"
          inputType="text"
          name="phoneNumber"
          register={register}
          error={!!errors.phoneNumber}
          errorText={errors.phoneNumber && errors.phoneNumber.message}
          required
        />
        <GSpacer size={32} />

        <GTextField
          id="password"
          placeholder="Password"
          inputType="password"
          name="password"
          register={register}
          error={!!errors.password}
          errorText={errors.password && errors.password.message}
          required
        />
        <GSpacer size={25} />
        <Controller
          name="country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <GSelectField
              {...field}
              placeholder="Select a country"
              options={countries}
              id="country"
              searchable={true}
              isError={!!errors.country}
              errorText={errors.country && errors.country.message}
            />
          )}
        />
        <TermsWrapper>
          <GCheckbox />
          <TermsTxt>
            I agree to{" "}
            <TermsTxtLink onClick={handleTermsNav}>
              Terms and Conditions
            </TermsTxtLink>
          </TermsTxt>
        </TermsWrapper>
        <BtnWrapper>
          <GButton
            width={"60%"}
            isLoading={isSubmitting || isPending}
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
        Already have an account? <LoginUpTxt to={"/login"}>Log in</LoginUpTxt>
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

const NameInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const TermsWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 55px;
  cursor: pointer;
`;

const TermsTxtLink = styled.span`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const TermsTxt = styled.p`
  color: var(--Black-100, #b6b6b6);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 24px;

  & > svg {
    width: 65.083px;
    height: 55px;
    flex-shrink: 0;
    cursor: pointer;
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
  cursor: pointer;

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
