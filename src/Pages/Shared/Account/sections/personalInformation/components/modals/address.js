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
import { AddressSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { countries, devices } from "../../../../../../../Utils";
import { useApiSend, useDeviceCheck } from "../../../../../../../Hooks";
import { updateUserAddress } from "../../../../../../../Urls";
import { useQueryClient } from "@tanstack/react-query";

const AddressModal = ({ isOpen, handleClose }) => {
  const { isMobile } = useDeviceCheck();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(AddressSchema),
  });

  const { mutate: updateAddress, isPending: isUpdatingAddress } = useApiSend(
    updateUserAddress,
    () => {
      toast.success("Address book updated");
      queryClient.invalidateQueries(["get-user-data"]);
    },
    () => {
      toast.error(`Something went wrong`);
    }
  );

  const onSubmit = (data) => {
    const body = {
      line1: data?.address,
      line2: data?.apartment,
      city: data?.city,
      state: data?.state,
      country: data?.country.value,
      postalCode: data?.zipCode,
    };
    updateAddress(body);
    handleClose();
  };

  return (
    <GModal open={isOpen} handleClose={handleClose}>
      <Container>
        <Header>
          <Title>Add new address</Title>
          <Cancel onClick={handleClose} />
        </Header>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <GTextField
            id="address"
            placeholder="Address"
            name="address"
            register={register}
            error={errors?.address}
            errorText={errors?.address && errors?.address?.message}
            required
          />
          <GTextField
            id="apartment"
            placeholder="Apartment/Suite (optional)"
            name="apartment"
            register={register}
            error={errors?.apartment}
            errorText={errors?.apartment && errors?.apartment?.message}
            required
          />
          <Row>
            <GTextField
              id="city"
              placeholder="City"
              name="city"
              register={register}
              error={errors?.city}
              errorText={errors?.city && errors?.city?.message}
              required
            />
            <GTextField
              id="state"
              placeholder="State"
              name="state"
              register={register}
              error={errors?.state}
              errorText={errors?.state && errors?.state?.message}
              required
            />
          </Row>
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
                isError={!!errors?.country}
                errorText={errors?.country && errors?.country?.message}
              />
            )}
          />
          <GTextField
            id="zipCode"
            placeholder="Zip code"
            name="zipCode"
            register={register}
            error={errors?.zipCode}
            errorText={errors?.zipCode && errors?.zipCode?.message}
            required
          />
          {/* <GTextField
            id="phoneNumber"
            placeholder="Phone"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
            errorText={errors.phoneNumber && errors.phoneNumber?.message}
            required
          /> */}
          {!isMobile && <GSpacer size={1} />}
          <GButton
            label={`Save changes`}
            isLoading={isUpdatingAddress}
            isDisabled={isSubmitting}
          />
        </FormWrapper>
      </Container>
    </GModal>
  );
};

export default AddressModal;

const Container = styled.div`
  width: 55vw;
  max-width: 750px;
  padding: 64px 60px;

  @media ${devices.mobileL} {
    width: 92vw;
    max-height: 96vh;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
`;
