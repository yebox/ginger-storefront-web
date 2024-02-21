import styled from "styled-components";
import vector from "../../Assets/Images/vector-background.png";
import footerImage from "../../Assets/Images/call-to-action.png";
import { GuideCard } from "./Components";
import { GButton, Product } from "../../Ui_elements";

const SellOnGinger = () => {
  return (
    <Container>
      <Banner>
        <img src={vector} />
        <div>
          <p>
            Start exploring thousands of brands and enjoy wholesale purchases
          </p>
          <h4>The all-in-one wholesale portal</h4>
        </div>
      </Banner>

      <GuideContainer>
        <h4>Easy guide <br/> to making a purchase</h4>

        <Guide>
          <GuideActivities>
            <div>
              <GuideCard />
              <GuideCard />
              <GuideCard />
            </div>
            <div>
              <GuideCard />
              <GuideCard />
              <GuideCard />
            </div>
          </GuideActivities>
          <GuideImages>
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </GuideImages>
        </Guide>
      </GuideContainer>

      <RecommendedContainer>
        <h5>Recommended products</h5>
        <Recommended>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />

        </Recommended>
      </RecommendedContainer>

      <Footer>
        <img src={footerImage} />
        <div>
          <p>
            Start exploring thousands of brands and enjoy wholesale purchases
          </p>
          <h4>Shop now and enjoy all the amazing offers available to you.</h4>
          <GButton alternate width={"11rem"} label="Get started" />
        </div>
      </Footer>
    </Container>
  );
};

export default SellOnGinger;

const Container = styled.main``;

const Banner = styled.div`
  position: relative;
  background-color: var(--black);
  /* display: flex;
    align-items: center;
    justify-content: center; */
  background-image: url("https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-color: aquamarine;
  background-size: cover;
  background-repeat: no-repeat;

  img {
    position: absolute;
    object-fit: cover;
    opacity: 0.3;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
    position: relative;
    padding: 10% 5%;
    z-index: 2;
    width: 100%;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.5);
    h4 {
      color: white;
      font-size: 3rem;
      font-weight: 500;
    }
    p {
      color: white;
      text-align: center;
    }
  }
`;

const GuideContainer = styled.section`
  padding: 10% 0 10% 5%;
  h4 {
    font-weight: 500;
    font-size: 2.5rem;
    margin-bottom: 5%;
  }
`;

const Guide = styled.div`
  height: 50vh;
  display: flex;
`;

const GuideActivities = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;

  > div:nth-child(1) {
    height: 100%;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  > div:nth-child(2) {
    height: 100%;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

const GuideImages = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: flex-end;
  gap: 4%;

  > img:nth-child(1) {
    width: 22rem;
    height: 100%;
  }
  > img:nth-child(2) {
    width: 18rem;
    height: 100%;
  }
`;

const RecommendedContainer = styled.section`
  padding: 2% 5%;
  h5 {
    text-align: center;
    font-size: 2.3rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
`;

const Recommended = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = styled.div`
  position: relative;
  margin-top: 5%;
  height: auto;
  img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    padding: 10% 5%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    width: 100%;
    height: inherit;
    h4 {
      color: white;
      font-size: 3rem;
      font-weight: 500;
      width: 70%;
      text-align: center;
    }
    p {
      color: white;
      text-align: center;
    }
  }
`;
