import React from "react";
import { styled } from "styled-components";
import { Product } from ".";
import { LeftArrow, RightArrow } from "../../../Assets/Svgs";

export const RelatedItems = () => {
  return (
    <Container>
      <Header>
        <h4>Related items</h4>
        <NavContainer>
          <NavItemWrapper>
            <LeftArrow />
          </NavItemWrapper>
          <NavItemWrapper>
            <RightArrow />
          </NavItemWrapper>
        </NavContainer>
      </Header>

      <CardsContainer>
        {[...Array(8)].map((_, index) => (
          <Product key={index} width={`300px`} />
        ))}
      </CardsContainer>
    </Container>
  );
};


const Container = styled.section`
  margin-top: 30vh;
  width: 100%;
`;

const Header = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 2.5rem;
    font-weight: 500;
    /* margin-bottom: 1.3rem; */
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavItemWrapper = styled.div`
  display: flex;
  width: 62.719px;
  height: 62.719px;
  padding: 19px 18.719px 19.719px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 31.359px;
  border: 1px solid #fafafa;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin-top: 50px;
  margin-left: 5%;
  padding-bottom: 10px;
  justify-content: space-between;
  overflow-x: auto; /* Add this line */
`;
