import React from "react";
import styled from "styled-components";

const Step = ({ completed, label }) => {
  return (
    <StepWrapper $completed={completed}>
      <Connector />
      <Content $completed={completed}>
        <Circle />
        <Label>{label}</Label>
      </Content>
    </StepWrapper>
  );
};

const ReportStepper = ({ currentStep, steps }) => {
  return (
    <Container>
      {steps.map((label, index) => (
        <Step key={index} label={label} completed={currentStep > index} />
      ))}
      <Connector />
    </Container>
  );
};

export default ReportStepper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    background: ${({ $completed }) => ($completed ? `#151515` : `#b6b6b6`)};
  }
`;

const Connector = styled.span`
  width: 1.34px;
  height: 50px;
  flex-shrink: 0;
  background: #b6b6b6;
  transition: all 0.25s ease;
`;

const Content = styled.div`
  position: relative;

  & > div {
    background: ${({ $completed }) => ($completed ? `#151515` : `transparent`)};
    border: ${({ $completed }) =>
      $completed ? `none` : `1.4px solid #b6b6b6`};
  }

  & > p {
    color: ${({ $completed }) => ($completed ? `#151515` : `#B6B6B6`)};
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.25s ease;
`;

const Label = styled.p`
  position: absolute;
  width: 125px;
  font-size: 16px;
  left: 42px;
  bottom: 2px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  transition: all 0.25s ease;
`;
