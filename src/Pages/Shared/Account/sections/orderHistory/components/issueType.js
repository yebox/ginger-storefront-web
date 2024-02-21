import React from "react";
import { styled } from "styled-components";

const IssueType = () => {
  return (
    <Container>
      <Title>Issue type</Title>
      <SubTxt>Please help us with as much information as possible.</SubTxt>
      <ContentWrapper></ContentWrapper>
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
