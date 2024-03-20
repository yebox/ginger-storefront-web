import React, { useState } from "react";
import { styled } from "styled-components";
import { issueTypeOption } from "./data";
import {
  GButton,
  GRadioButtonsGroup,
  GSpacer,
  GTextAreaField,
} from "../../../../../../Ui_elements";
import { devices } from "../../../../../../Utils";

const IssueType = ({ setCurrentStep, setFormData, formData }) => {
  const [radioValue, setRadioValue] = useState(issueTypeOption[0].value);
  const [inputValue, setInputValue] = useState("");
  const maxChars = 140;

  const handleCheck = (e) => {
    const value = e.target.value;
    if (value !== "others") {
      setInputValue("");
    }
    setRadioValue(value);
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxChars) {
      setInputValue(newText);
    }
  };

  const handleSubmit = () => {
    if (radioValue !== "other") {
      setFormData({ ...formData, issueType: radioValue });
    } else {
      setFormData({ ...formData, issueType: radioValue, issue: inputValue });
    }
    setCurrentStep(2);
  };

  return (
    <Container>
      <Title>Issue type</Title>
      <SubTxt>Please help us with as much information as possible.</SubTxt>
      <ContentWrapper>
        <GRadioButtonsGroup
          name={"issueType"}
          options={issueTypeOption}
          handleChange={handleCheck}
          value={radioValue}
        />
        <GSpacer size={70} mbSize={50} />
        <GTextAreaField
          id="issueType"
          placeholder="Other reason, specify"
          name="issueType"
          value={inputValue}
          isDisabled={!(radioValue === "other")}
          maxChars={maxChars}
          onChange={handleChange}
          required
        />
        <GSpacer size={30} />
        <GButton
          label={`Submit`}
          onClick={handleSubmit}
          isDisabled={radioValue === "other" && !inputValue}
        />
      </ContentWrapper>
    </Container>
  );
};

export default IssueType;

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
