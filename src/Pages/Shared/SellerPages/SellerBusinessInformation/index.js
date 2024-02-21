import React from "react";
import styled from "styled-components";
// import { AppleIcon, GoogleIcon } from "../../../../Assets/Svgs";
import { GTextField, GSpacer, GButton, GCheckbox, GSelectField } from "../../../../Ui_elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./validation";
import { Link } from "react-router-dom";
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

const SellerBusinessInformation = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  // const handleTermsNav = (e) => {
  //   e.stopPropagation();
  //   navigate("/");
  // };

  const onSubmit = () => { };
  console.log({ errors });

  return (
    <>
      <TitleContainer>
        <Title>Business information</Title>
        <p>2/3</p>
      </TitleContainer>

      <Subtitle>
        <h5>Nice to meet you, Ciroma</h5>
        <p>Let’s get to know your business</p>
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          name="country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <GSelectField
              {...field}
              placeholder="Business type"
              options={countryData}
              id="country"
              searchable={true}
              isError={!!errors.country}
              errorText={errors.country && errors.country.message}
            />
          )}
        />
        <GSpacer size={32} />

        <GTextField
          id="firstName"
          placeholder="Business name"
          inputType="firstName"
          name="firstName"
          register={register}
          error={!!errors.firstName}
          errorText={errors.firstName && errors.firstName.message}
          required
        />

        <GSpacer size={32} />


        <GTextField
          id="firstName"
          placeholder="Website"
          inputType="firstName"
          name="firstName"
          register={register}
          error={!!errors.firstName}
          errorText={errors.firstName && errors.firstName.message}
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
              placeholder="Business type"
              options={countryData}
              id="country"
              searchable={true}
              isError={!!errors.country}
              errorText={errors.country && errors.country.message}
            />
          )}
        />
        <GSpacer size={32} />

        {/* <TermsWrapper>
          <GCheckbox />
          <TermsTxt>
            I agree to{" "}
            <TermsTxtLink onClick={handleTermsNav}>
              Terms and Conditions
            </TermsTxtLink>
          </TermsTxt>
        </TermsWrapper> */}

        <ProductTypeContainer>
          <ProductHeadText>What type of products are you looking for?</ProductHeadText>
          <div>
            <CheckWrapper>
              <GCheckbox />
              <TermsTxt>Makeup</TermsTxt>
            </CheckWrapper>
            <CheckWrapper>
              <GCheckbox />
              <TermsTxt>Skincare</TermsTxt>
            </CheckWrapper>
            <CheckWrapper>
              <GCheckbox />
              <TermsTxt>Nail products</TermsTxt>
            </CheckWrapper>
            <CheckWrapper>
              <GCheckbox />
              <TermsTxt>Eyelashes</TermsTxt>
            </CheckWrapper>
            <CheckWrapper>
              <GCheckbox />
              <TermsTxt>products</TermsTxt>
            </CheckWrapper>
          </div>
        </ProductTypeContainer>
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

export default SellerBusinessInformation;


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

const ProductTypeContainer = styled.div`
  margin-bottom: 2rem;
`
const ProductHeadText = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`

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

const CheckWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 0px;
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
