import React from "react";
import {
  GButton,
  GModal,
  GSelectField,
  GSpacer,
  GTextField,
} from "../../../../../../../Ui_elements";
import { styled } from "styled-components";
import { Cancel } from "../../../../../../../Assets/Svgs";
import { Controller, useForm } from "react-hook-form";
import { PersonalInformationSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { countryData } from "../../../../../SignUp/data";
import { toast } from "react-hot-toast";

const PersonalModal = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(PersonalInformationSchema),
  });

  const onSubmit = () => {
    toast.success(`Your information has been updated successfully.`);
  };
  return (
    <GModal open={isOpen} handleClose={handleClose}>
      <Container>
        <Header>
          <Title>Edit personal information</Title>
          <Cancel onClick={handleClose} />
        </Header>
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
            id="phoneNumber"
            placeholder="Enter phone number"
            inputType="text"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
            errorText={errors.phoneNumber && errors.phoneNumber.message}
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
          <GSpacer size={1} />
          <GButton label={`Save changes`} isDisabled={isSubmitting} />
        </FormWrapper>
      </Container>
    </GModal>
  );
};

export default PersonalModal;

const Container = styled.div`
  width: 55vw;
  padding: 64px 60px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
`;

const Title = styled.p`
  color: #000;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 40.8px */
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 75px;
`;
