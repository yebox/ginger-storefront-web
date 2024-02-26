import React, { useState } from "react";
import { styled } from "styled-components";
import { TfaIcon } from "../../../../../../Assets/Svgs";
import { GSwitch } from "../../../../../../Ui_elements";

const Tfa = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Container>
      <LeftWrapper>
        <TfaIcon />
        <ContentWrapper>
          <Title>Secure Your Account</Title>
          <Description>
            {`Two-factor authentication adds an extra layer of security to your
            account. To log in, in addition you'll need to provide a 6 digit
            code.`}
          </Description>
          <Badge>{isChecked ? `Enabled` : `Disabled`}</Badge>
        </ContentWrapper>
      </LeftWrapper>
      <GSwitch handleChange={handleToggle} isChecked={isChecked} name={`tfa`} />
    </Container>
  );
};

export default Tfa;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #f6fcfe;
  width: 100%;
  padding: 16px 26px;
  margin-bottom: 45px;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 10px;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  color: var(--Black-500, #151515);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const Description = styled.p`
  color: var(--Black-300, #626262);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
  width: 70%;
`;

const Badge = styled.span`
  position: absolute;
  top: 1px;
  left: 150px;
  display: flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--Gray-100, #f2f4f7);
  color: var(--Gray-700, #344054);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 12px */
`;
