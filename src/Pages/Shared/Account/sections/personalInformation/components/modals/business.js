import React from "react";
import {
  GButton,
  GModal,
  GSpacer,
  GTextField,
} from "../../../../../../../Ui_elements";
import { styled } from "styled-components";
import { Cancel } from "../../../../../../../Assets/Svgs";
import { useForm } from "react-hook-form";
import { BusinessInformationSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

const BusinessModal = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(BusinessInformationSchema),
  });

  const onSubmit = () => {
    toast.success(`Your information has been updated successfully.`);
    handleClose();
  };
  return (
    <GModal open={isOpen} handleClose={handleClose}>
      <Container>
        <Header>
          <Title>Edit business information</Title>
          <Cancel onClick={handleClose} />
        </Header>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <GTextField
            id="businessType"
            placeholder="Enter business type"
            name="businessType"
            register={register}
            error={errors.businessType}
            errorText={errors.businessType && errors.businessType.message}
            required
          />
          <GTextField
            id="businessName"
            placeholder="Enter business name"
            name="businessName"
            register={register}
            error={errors.businessName}
            errorText={errors.businessName && errors.businessName.message}
            required
          />
          <GTextField
            id="website"
            placeholder="Enter website or social url"
            name="website"
            register={register}
            error={errors.website}
            errorText={errors.website && errors.website.message}
            required
          />
          <GTextField
            id="businessDate"
            placeholder="Enter business date"
            name="businessDate"
            register={register}
            error={errors.businessDate}
            errorText={errors.businessDate && errors.businessDate.message}
            required
          />
          <GSpacer size={1} />
          <GButton label={`Save changes`} isDisabled={isSubmitting} />
        </FormWrapper>
      </Container>
    </GModal>
  );
};

export default BusinessModal;

const Container = styled.div`
  width: 55vw;
  max-width: 750px;
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
    cursor: pointer;
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
