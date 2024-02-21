import React from "react";
import { styled } from "styled-components";
import Personal from "./components/personal";
import Business from "./components/business";
import Address from "./components/address";

const PersonalInformation = () => {
  return (
    <Container>
      <Personal />
      <Business />
      <Address />
    </Container>
  );
};

export default PersonalInformation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
