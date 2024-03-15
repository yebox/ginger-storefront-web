import React from "react";
import { styled } from "styled-components";
import { SuccessIcon } from "../../../../../../Assets/Svgs";
import { GButton } from "../../../../../../Ui_elements";
import { useNavigate } from "react-router-dom";
import { devices } from "../../../../../../Utils";

const ReportSuccess = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <SuccessIcon />
      <MainTxt>Response recorded </MainTxt>
      <SubTxt>
        Thanks you for your response, watch out for your notifications because
        we will communicate soon
      </SubTxt>
      <GButton
        label={`Return home`}
        width={`337px`}
        onClick={() => navigate("/")}
      />
    </Container>
  );
};

export default ReportSuccess;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const MainTxt = styled.p`
  color: var(--Black-300, #151515);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin-top: 30px;

  @media ${devices.mobileL} {
    font-size: 20px;
  }
`;

const SubTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  text-align: center;
  width: 85%;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin: 15px 0 40px;

  @media ${devices.mobileL} {
    font-size: 15px;
    margin: 12px 0 35px;
  }
`;
