import React, { useEffect } from "react";
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
import { toast } from "react-hot-toast";
import { countries, devices } from "../../../../../../../Utils";
import { useApiSend } from "../../../../../../../Hooks";
import { updateUser } from "../../../../../../../Urls";
import { useQueryClient } from "@tanstack/react-query";

const PersonalModal = ({ isOpen, handleClose, user }) => {
  const defaultCountry = countries.find((x) => x.value === user?.country);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(PersonalInformationSchema),
  });

  useEffect(() => {
    if (isOpen && user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("phoneNumber", user.phoneNumber);
      setValue("country", defaultCountry);
    }
  }, [isOpen, user, defaultCountry, setValue]);

  const { mutate, isPending } = useApiSend(
    updateUser,
    () => {
      toast.success("Your information has been updated successfully.");
      queryClient.invalidateQueries(["get-user-data"]);
      onClose();
    },
    () => {
      toast.error(`Something went wrong`);
    }
  );

  const onClose = () => {
    handleClose();
  };

  const onSubmit = (values) => {
    const body = {
      ...values,
      country: values?.country?.value,
    };
    mutate(body);
  };

  return (
    <GModal open={isOpen} handleClose={onClose} key={user}>
      <Container>
        <Header>
          <Title>Edit personal information</Title>
          <Cancel onClick={onClose} />
        </Header>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <GTextField
            id="firstName"
            placeholder="Enter first name"
            inputType="text"
            name="firstName"
            register={register}
            error={errors.firstName}
            errorText={errors.firstName && errors.firstName.message}
            required
          />
          <GTextField
            id="lastName"
            placeholder="Enter last name"
            inputType="text"
            name="lastName"
            register={register}
            error={errors.lastName}
            errorText={errors.lastName && errors.lastName.message}
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
          <GSpacer size={1} />
          <GButton
            label={`Save changes`}
            isLoading={isPending}
            isDisabled={isSubmitting}
          />
        </FormWrapper>
      </Container>
    </GModal>
  );
};

export default PersonalModal;

const Container = styled.div`
  width: 55vw;
  max-width: 750px;
  padding: 64px 60px;

  @media ${devices.mobileL} {
    width: 92vw;
    height: 80vh;
    padding: 40px 16px 32px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Title = styled.p`
  color: #000;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 40.8px */

  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 75px;

  @media ${devices.mobileL} {
    margin-top: 50px;
  }
`;
