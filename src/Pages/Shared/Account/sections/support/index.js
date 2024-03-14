import React from "react";
import { styled } from "styled-components";
import {
  EditIcon,
  FacebookFill,
  LinkedInFill,
  TwitterFill,
} from "../../../../../Assets/Svgs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SupportSchema } from "./validation";
import {
  GButton,
  GTextAreaField,
  GTextField,
} from "../../../../../Ui_elements";
import { toast } from "react-hot-toast";
import { devices } from "../../../../../Utils";

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SupportSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success(`Your message has been sent successfully.`);
  };

  return (
    <Container>
      <TopWrapper>
        <Title>Help & Support</Title>
        <EditIcon />
      </TopWrapper>
      <BottomWrapper>
        <FormTitle>Get in touch with us</FormTitle>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <GTextField
            id="fullName"
            placeholder="Enter full name"
            inputType="text"
            name="fullName"
            register={register}
            error={errors.fullName}
            errorText={errors.fullName && errors.fullName.message}
            required
          />
          <GTextField
            id="email"
            placeholder="Enter email address"
            inputType="email"
            name="email"
            register={register}
            error={errors.email}
            errorText={errors.email && errors.email.message}
            required
          />
          <GTextAreaField
            id="note"
            placeholder="Send us a note"
            name="note"
            register={register}
            error={errors.note}
            errorText={errors.note && errors.note.message}
            required
          />
          <GButton label={`Send`} isDisabled={isSubmitting} width={`155px`} />
        </FormWrapper>
      </BottomWrapper>
      <ConnectWrapper>
        <ConnectTxt>Connect with us on our socials</ConnectTxt>
        <SocialWrapper>
          <TwitterFill />
          <LinkedInFill />
          <FacebookFill />
        </SocialWrapper>
      </ConnectWrapper>
    </Container>
  );
};

export default Support;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  padding: 32px 5vw 32px 45px;

  @media ${devices.mobileL} {
    padding: 20px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 40px 5vw 48px 45px;

  @media ${devices.mobileL} {
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const Title = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 35px;
`;

const FormTitle = styled.p`
  color: var(--Black-500, #151515);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 33.6px */
  margin-bottom: 70px;

  @media ${devices.mobileL} {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 40px 5vw 48px 45px;
  border-top: 0.774px solid #eaeaea;

  @media ${devices.mobileL} {
    padding: 20px;
    margin-top: unset;
  }
`;

const ConnectTxt = styled.p`
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  opacity: 0.5;

  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;
