import * as React from "react";
import Zoom from "@mui/material/Zoom";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "styled-components";
import { ClickAwayListener } from "@mui/material";

export const GDropdown = ({ label, setLabel, options }) => {
  const [open, setOpen] = React.useState(false);

  const toggleState = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (value) => {
    setLabel(value);
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Container>
        <LabelWrapper $isOpen={open} onClick={toggleState}>
          <Label>{label}</Label>
          <ArrowForwardIosSharpIcon sx={{ width: "14px" }} />
        </LabelWrapper>
        <Zoom in={open} style={{ transitionDelay: open ? "100ms" : "0ms" }}>
          <OptionsWrapper>
            {options.map((x, idx) => (
              <Option key={idx} onClick={() => handleSelect(x)}>
                {x}
              </Option>
            ))}
          </OptionsWrapper>
        </Zoom>
      </Container>
    </ClickAwayListener>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;

  & > div:nth-of-type(2) {
    position: absolute;
    top: 30px;
    z-index: 10;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 85px;
  cursor: pointer;

  & > svg {
    margin-top: 2px;
    transform: ${({ $isOpen }) =>
      $isOpen ? `rotate(270deg)` : `rotate(90deg)`};
    transition: all 0.25s ease;
  }
`;

const Label = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Option = styled.p`
  color: var(--Black-500, #151515);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  padding: 8px 15px;
  background: transparent;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #f1f1f2;
  }
`;
