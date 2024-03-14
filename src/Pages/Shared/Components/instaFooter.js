import React from "react";
import { styled } from "styled-components";
import { Instagram } from "../../../Assets/Svgs";
import footerimage from "../../../Assets/Images/footer.png";
import { devices } from "../../../Utils";

export const InstaFooter = () => {
  return (
    <Container>
      <Bg src={footerimage} />
      <Button>
        <Instagram />
        <Label>gingerme</Label>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 233px;

  @media ${devices.mobileL} {
    height: 103px;
  }
`;

const Bg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Button = styled.button`
  display: flex;
  width: 137px;
  height: 48px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1.5px solid var(--Black-100, #b6b6b6);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4.5px);
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    backdrop-filter: blur(8.5px);
  }

  & > svg {
    width: 18px;
    height: 18px;
  }

  @media ${devices.mobileL} {
    height: 25px;
    width: 100px;
    gap: 5px;

    & > svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const Label = styled.p`
  color: var(--Black-500, #151515);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */

  @media ${devices.mobileL} {
    font-size: 10px;
  }
`;
