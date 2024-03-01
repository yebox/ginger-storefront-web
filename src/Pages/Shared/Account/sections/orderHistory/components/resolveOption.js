import React, { useState } from "react";
import { styled } from "styled-components";
import { resolveOption } from "./data";
import {
  GButton,
  GRadioButtonsGroup,
  GSpacer,
} from "../../../../../../Ui_elements";

const ResolveOption = ({ handleNext }) => {
  const [radioValue, setRadioValue] = useState(resolveOption[0].value);

  const handleCheck = (e) => {
    setRadioValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("resolveOption", radioValue);
    handleNext();
  };

  return (
    <Container>
      <Title>How would you like the issue resolved?</Title>
      <SubTxt>Select an option for resolution</SubTxt>
      <ContentWrapper>
        <GRadioButtonsGroup
          name={"resolveOption"}
          options={resolveOption}
          handleChange={handleCheck}
          value={radioValue}
        />
        <GSpacer size={90} />
        <GButton label={`Submit`} onClick={handleSubmit} />
      </ContentWrapper>
    </Container>
  );
};

export default ResolveOption;

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
`;

const SubTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  width: 51%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  max-width: 664px;
`;
