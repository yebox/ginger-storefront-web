import React from "react";
import { styled } from "styled-components";
import { GButton, GSpacer, Product } from "../../../Ui_elements";

export const FeaturedItems = () => {
  return (
    <Container>
      <Header>Featured Products</Header>
      <CardsContainer>
        {[...Array(4)].map((_, index) => (
          <Product key={index} width={`23.8%`} />
        ))}
      </CardsContainer>
      <GSpacer size={80} />
      <GButton label={"See more"} outline width={"172px"} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  width: 100%;
  padding: 0 5%;
`;

const Header = styled.h4`
  font-size: 2.5rem;
  font-weight: 500;
  align-self: flex-start;
`;

const CardsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 20px;
  max-width: 100%;
  margin-top: 70px;
  padding-bottom: 10px;
`;
