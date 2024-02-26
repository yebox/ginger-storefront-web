import React from "react";
import {
  GButton,
  GModal,
  GSpacer,
  GTextField,
} from "../../../../../../Ui_elements";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { ChangePasswordSchema } from "../validation";
import { Cancel } from "../../../../../../Assets/Svgs";

const PasswordModal = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  });

  const onSubmit = () => {
    toast.success(`Your passowrd has been updated successfully.`);
    handleClose();
  };

  return (
    <GModal open={isOpen} handleClose={handleClose}>
      <Container>
        <Header>
          <Title>Update password</Title>
          <Cancel onClick={handleClose} />
        </Header>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <GTextField
            id="oldPassword"
            placeholder="Old password"
            inputType="password"
            name="oldPassword"
            register={register}
            error={errors.oldPassword}
            errorText={errors.oldPassword && errors.oldPassword.message}
            required
          />
          <GTextField
            id="newPassword"
            placeholder="New password"
            inputType="password"
            name="newPassword"
            register={register}
            error={errors.newPassword}
            errorText={errors.newPassword && errors.newPassword.message}
            required
          />
          <GTextField
            id="confirmPassword"
            placeholder="Confirm password"
            inputType="password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            errorText={errors.confirmPassword && errors.confirmPassword.message}
            required
          />
          <GSpacer size={1} />
          <GButton label={`Update password`} isDisabled={isSubmitting} />
        </FormWrapper>
      </Container>
    </GModal>
  );
};

export default PasswordModal;

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
