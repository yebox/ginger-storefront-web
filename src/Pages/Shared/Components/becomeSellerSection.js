import React from "react";
import CallToActionImg from "../../../Assets/Images/call-to-action.png";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { GButton } from "../../../Ui_elements";
import { devices } from "../../../Utils";

export const BecomeSellerSection = () => {
  const navigate = useNavigate();
  return (
    <CallToAction>
      <div>
        <div>
          <h4>
            Become a seller on <span>Ginger</span>
          </h4>
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
  height: 50vh;
  position: relative;

  > div {
    position: absolute;
    left: 50%;
    bottom: -20vh;
    transform: translateX(-50%);
    width: 50vw;
    height: 40vh;
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

        & > span {
          color: var(--Primary-500, #ff4623);
        }
      }
      p {
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 1.6rem;
        color: var(--Black-500, #151515);
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

  @media ${devices.mobileL} {
    height: 400px;

    & > div {
      width: 90vw;
      bottom: -14vh;
      padding: 32px 20px 63px;
      height: unset;

      & > div {
        display: flex;
        align-items: center;
        flex-direction: column;

        h4 {
          font-size: 23px;
          margin-bottom: 14px;
        }

        p {
          font-size: 16px;
          width: 85%;
        }

        & > div {
          flex-direction: column;
          width: 100%;
        }
      }
    }
  }
`;
