import React, { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { GButton, GImageUpload } from "../../../../../../Ui_elements";
import { devices } from "../../../../../../Utils";
import { useApiSend } from "../../../../../../Hooks";
import { createOrderReport } from "../../../../../../Urls";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ProductUpload = ({ setCurrentStep, formData, orderId }) => {
  const [files, setFiles] = useState([]);
  const { selectedOrderItem } = useSelector((state) => state?.global);

  const { mutate: createReport, isPending } = useApiSend(
    createOrderReport,
    () => {
      setCurrentStep(4);
    },
    () => {
      toast.error(`Something went wrong`);
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = () => {
    const formDataObj = new FormData();
    files?.forEach((x) => formDataObj.append("images", x));
    formDataObj.append("issueType", formData?.issueType);
    formDataObj.append("issue", formData?.issue);
    formDataObj.append("resolveOption", formData?.resolveOption);
    formDataObj.append("orderId", orderId);
    formDataObj.append("productId", selectedOrderItem?.productId);
    createReport(formDataObj);
  };

  return (
    <Container>
      <Title>Product evidence</Title>
      <SubTxt>Kindly submit any image/video to help clarify the item.</SubTxt>
      <ContentWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <GImageUpload
            register={register}
            trigger={trigger}
            errors={errors}
            files={files}
            setFiles={setFiles}
          />
          <SubmitWrapper>
            <GButton
              label={"Submit"}
              width={"158px"}
              isLoading={isPending}
              isDisabled={files.length === 0}
            />
          </SubmitWrapper>
        </Form>
      </ContentWrapper>
    </Container>
  );
};

export default ProductUpload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin-bottom: 12px;

  @media ${devices.mobileL} {
    font-size: 20px;
  }
`;

const SubTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  width: 51%;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  max-width: 664px;

  @media ${devices.mobileL} {
    margin-top: 40px;
  }
`;

const Form = styled.form``;

const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;
`;
