import React from "react";
import CallToActionImg from "../../../Assets/Images/call-to-action.png";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { GButton } from "../../../Ui_elements";

export const BecomeSellerSection = () => {
  const navigate = useNavigate();
  return (
    <CallToAction>
      <div>
        <div>
          <h4>Become a seller on Ginger</h4>
          <p>Browse more top selling products from top brands</p>
          <div>
            <GButton label="Sign up now" onClick={() => navigate("/login")} />
            <GButton
              outline
              onClick={() => navigate("/sell-on-ginger")}
              label={"Learn more"}
            />
          </div>
        </div>
      </div>
    </CallToAction>
  );
};

const CallToAction = styled.section`
  background-image: url(${CallToActionImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 31.2rem;
  position: relative;

  > div {
    position: absolute;
    left: 50%;
    bottom: -12.5rem;
    transform: translateX(-50%);
    width:70%;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-50);
    border: 1px solid var(--light-primary);
    > div {
      h4 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 1.3rem;
      }
      p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 1.6rem;
      }

      > div {
        display: flex;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        gap: 1rem;
      }
    }
  }
`;
