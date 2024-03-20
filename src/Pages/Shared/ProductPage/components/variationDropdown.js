import * as React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "styled-components";
import { ClickAwayListener, Fade } from "@mui/material";

export const VariationDropdown = ({ label, setLabel, options }) => {
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
          {label}
          <Divider />
          <ArrowForwardIosSharpIcon sx={{ width: "14px" }} />
        </LabelWrapper>
        <Fade in={open} style={{ transitionDelay: open ? "100ms" : "0ms" }}>
          <OptionsWrapper>
            {options.map((x, idx) => (
              <Option key={idx} onClick={() => handleSelect(x)}>
                {x}
              </Option>
            ))}
          </OptionsWrapper>
        </Fade>
      </Container>
    </ClickAwayListener>
  );
};

const Container = styled.div`
  position: relative;
  & > div:nth-of-type(2) {
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 10;
  }
`;

const LabelWrapper = styled.div`
  display: inline-flex;
  height: 42px;
  min-width: 120px;
  padding: 16px 10px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid var(--Black-300, #626262);
  cursor: pointer;

  & > svg {
    margin: 2px 4px 0 0;
    transform: ${({ $isOpen }) =>
      $isOpen ? `rotate(270deg)` : `rotate(90deg)`};
    transition: all 0.25s ease;
  }
`;

const Divider = styled.span`
  height: 17px;
  width: 1px;
  background: #e8e8e8;
  margin: 0 8px;
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
