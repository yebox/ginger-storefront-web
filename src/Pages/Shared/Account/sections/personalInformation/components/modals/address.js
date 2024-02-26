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
import { countryData } from "../../../../../SignUp/data";

const AddressModal = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(AddressSchema),
  });

  const onSubmit = () => {
    toast.success(`You address has been added successfully.`);
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
            error={errors.address}
            errorText={errors.address && errors.address.message}
            required
          />
          <GTextField
            id="apartment"
            placeholder="Apartment/Suite (optional)"
            name="apartment"
            register={register}
            error={errors.apartment}
            errorText={errors.apartment && errors.apartment.message}
            required
          />
          <Row>
            <GTextField
              id="city"
              placeholder="City"
              name="city"
              register={register}
              error={errors.city}
              errorText={errors.city && errors.city.message}
              required
            />
            <GTextField
              id="state"
              placeholder="State"
              name="state"
              register={register}
              error={errors.state}
              errorText={errors.state && errors.state.message}
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
                options={countryData}
                id="country"
                searchable={true}
                isError={!!errors.country}
                errorText={errors.country && errors.country.message}
              />
            )}
          />
          <GTextField
            id="zipCode"
            placeholder="Zip code"
            name="zipCode"
            register={register}
            error={errors.zipCode}
            errorText={errors.zipCode && errors.zipCode.message}
            required
          />
          <GTextField
            id="phoneNumber"
            placeholder="Phone"
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
            errorText={errors.phoneNumber && errors.phoneNumber.message}
            required
          />
          <GSpacer size={1} />
          <GButton label={`Save changes`} isDisabled={isSubmitting} />
        </FormWrapper>
      </Container>
    </GModal>
  );
};

export default AddressModal;

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

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
`;
