import React from "react";
import { styled } from "styled-components";
import { GButton, GSpacer, Product } from "../../../Ui_elements";
import { devices } from "../../../Utils";
import { useApiGet } from "../../../Hooks";
import { getProducts } from "../../../Urls";

export const FeaturedItems = () => {
  const { data, isLoading } = useApiGet(
    ["get-featured-products"],
    () => getProducts({ isFeatured: true }),
    {
      enable: true,
      refetchOnWindowFocus: false,
    }
  );

  const lastFourFeaturedProducts = data?.slice(-4);

  console.log({ data });
  return (
    <Container>
      <Header>Featured Products</Header>
      <CardsContainer>
        {lastFourFeaturedProducts?.map((item, index) => (
          <Product key={index} item={item} width={`23.8%`} mbWidth={`47%`} />
        ))}
      </CardsContainer>
      <GSpacer size={80} mbSize={50} />
      <GButton label={"See more"} outline width={"172px"} mbWidth={`50%`} />
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

  @media ${devices.mobileL} {
    margin-top: 100px;
  }
`;

const Header = styled.h4`
  font-size: 2.5rem;
  font-weight: 500;
  align-self: flex-start;

  @media ${devices.mobileL} {
    font-size: 22px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 20px;
  width: 100%;
  margin-top: 70px;
  padding-bottom: 10px;

  @media ${devices.mobileL} {
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 30px;
  }
`;
