import React from "react";
import styled from "styled-components";
// import { AppleIcon, GoogleIcon } from "../../../../Assets/Svgs";
import { GTextField, GSpacer, GButton, GCheckbox, GSelectField } from "../../../../Ui_elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./validation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";

const countryData = [
  { label: "Nigeria", value: "nigeria" },
  { label: "Ghana", value: "ghana" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
  { label: "China", value: "china" },
];

const SellerSignUpPersonalInformation = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const handleTermsNav = (e) => {
    e.stopPropagation();
    navigate("/");
  };

  const onSubmit = () => { };

  return (
    <>
      <TitleContainer>
        <Title>Personal Information</Title>
        <p>1/3</p>
      </TitleContainer>

      <Subtitle>
        <h5>Let’s get started</h5>
        <p>Let’s start by getting to know you</p>
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NameInputWrapper>
          <GTextField
            id="firstName"
            placeholder="Full name"
            inputType="firstName"
            name="firstName"
            register={register}
            error={!!errors.firstName}
            errorText={errors.firstName && errors.firstName.message}
            required
          />
          {/* <GTextField
            id="lastName"
            placeholder="Last name"
            inputType="lastName"
            name="lastName"
            register={register}
            error={!!errors.lastName}
            errorText={errors.lastName && errors.lastName.message}
            required
          /> */}
        </NameInputWrapper>
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
        <GSpacer size={32} />

        <GTextField
          id="email"
          placeholder="Email / Phone number"
          inputType="text"
          name="email"
          register={register}
          error={!!errors.email}
          errorText={errors.email && errors.email.message}
          required
        />
        <GSpacer size={32} />

        <GSpacer size={25} />
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

            isLoading={isSubmitting}
            type={"submit"}
            label={"Sign up for free"}
          />
        </BtnWrapper>
      </Form>
      <AuthLinkTxt>
        Already have an account? <LoginUpTxt to={"/login"}>Log in</LoginUpTxt>
      </AuthLinkTxt>
    </>
  );
};

export default SellerSignUpPersonalInformation;


const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h2`
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: var(--Primary-500, #ff4623);
`;

const Subtitle = styled.div`
margin-top: 3rem;
width: 85%;

p{
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: #626262;
  text-align: left;
  /* margin-top: 20px; */
}
  h5{
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
  }
`;

const Form = styled.form`
  margin: 77px 0 24px;
`;

const AuthLinkTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
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


const LoginUpTxt = styled(Link)`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
