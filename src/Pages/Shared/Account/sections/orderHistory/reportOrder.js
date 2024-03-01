import React, { useState } from "react";
import ReportStepper from "./components/reportStepper";
import { reportSteps } from "./components/data";
import { styled } from "styled-components";
import { CaretLeft } from "../../../../../Assets/Svgs";
import { useNavigate } from "react-router-dom";
import ProductUpload from "./components/productUpload";
import IssueType from "./components/issueType";
import ResolveOption from "./components/resolveOption";

const ReportOrder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleGoBack = () => navigate("/account/order/1");

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <Container>
      <LeftWrapper>
        <TitleWrapper onClick={handleGoBack}>
          <CaretLeft />
          <Title>Report Issue</Title>
        </TitleWrapper>
        <ReportStepper currentStep={currentStep} steps={reportSteps} />
      </LeftWrapper>
      <RightWrapper>
        {currentStep === 1 && <IssueType handleNext={handleNext} />}
        {currentStep === 2 && <ResolveOption handleNext={handleNext} />}
        {currentStep === 3 && <ProductUpload />}
      </RightWrapper>
    </Container>
  );
};

export default ReportOrder;

const Container = styled.div`
  display: flex;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 70px 5%;
  border: 1px solid #ececec;
  border-left: none;
  background: #fffbf6;
  width: 40%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 4px;
  }
`;

const Title = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

const RightWrapper = styled.div`
  padding: 72px 100px;
  flex-grow: 1;
`;
