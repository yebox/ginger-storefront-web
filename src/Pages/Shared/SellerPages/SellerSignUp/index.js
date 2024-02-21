import React from "react";
import styled from "styled-components";
import { GoogleIcon } from "../../../../Assets/Svgs";
import {
  GButton,
  GTextField,
} from "../../../../Ui_elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "./validation";
import { Link} from "react-router-dom";


const SellerSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });


  const onSubmit = () => { };

  return (
    <>
      <Title>Sign Up</Title>
      <Subtitle>
        Purchase from over 100,000 unique brands. Sign up for free!
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <GTextField
          id="email"
          placeholder="Business email"
          inputType="text"
          name="email"
          register={register}
          error={!!errors.email}
          errorText={errors.email && errors.email.message}
          required
        />

        <BtnWrapper>
          <GButton
            width={"100%"}
            isLoading={isSubmitting}
            type={"submit"}
            label={"Sign up for free"}
          />

          <AuthLinkTxt>
            Already have an account? <LoginUpTxt to={"/login"}>Log in</LoginUpTxt>
          </AuthLinkTxt>
        </BtnWrapper>

        <OrContainer>
          <Line />
          <OrTxt>or</OrTxt>
          <Line />
        </OrContainer>


        <BtnWrapper>
          <GButton
            width={"100%"}
            isLoading={isSubmitting}
            type={"submit"}
            outline
            label={() =>
              <ButtonLabel>
                <GoogleIcon />
                <p>Sign up for free</p>
              </ButtonLabel>
            }
          />

          <AuthLinkTxt>
            Already have a brand? <LoginUpTxt to={"/login"}>Sign up to sell on Ginger</LoginUpTxt>
          </AuthLinkTxt>
        </BtnWrapper>

      </Form>

    </>
  );
};

export default SellerSignUp;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--black);
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
  display: flex;
  flex-direction: column;
  gap: 40px;
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

const ButtonLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`


const OrContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Line = styled.div`
  border-top: 1px solid var(--gray-250);
  width: 100%;
  height: 1px;
`

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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


const LoginUpTxt = styled(Link)`
  color: var(--Primary-500, #ff4623);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
