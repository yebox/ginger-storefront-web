import React from "react";
import styled from "styled-components";

export const GStepper = ({ totalSteps, activeStep }) => {
  const steps = [];
  const currentStep =
    activeStep < 0 ? 0 : totalSteps >= activeStep ? activeStep : totalSteps;

  for (let i = 1; i <= totalSteps; i++) {
    const completed = i <= activeStep;
    steps.push(<Step $total={totalSteps} key={i} $completed={completed} />);
  }

  return (
    <Container>
      <Count>{`${currentStep}/${totalSteps}`}</Count>
      <StepperContainer>{steps}</StepperContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
`;

const Count = styled.p`
  display: flex;
  align-items: center;
  align-self: end;
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Step = styled.div`
  width: ${({ $total }) => `calc(100% / ${$total})`};
  height: 5px;
  background-color: ${({ $completed }) => ($completed ? "#FF0000" : "#CCCCCC")};
  border-radius: 5px;
  transition: all 0.25s ease;
`;
