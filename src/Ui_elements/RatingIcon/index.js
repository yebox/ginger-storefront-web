import React from "react";
import Checkbox from "@mui/material/Checkbox";
import StarBorder from "@mui/icons-material/StarOutlined";
import Star from "@mui/icons-material/Star";
import { styled } from "styled-components";

export const GRatingIcon = ({
  isChecked = false,
  isClickable = false,
  iconIndex,
  size,
  onClick,
}) => {
  const label = { inputProps: { "aria-label": "rating icon" } };
  return (
    <Container $size={size} $isClickable={isClickable}>
      <Checkbox
        onClick={() => isClickable && onClick(iconIndex + 1)}
        {...label}
        checked={isChecked}
        icon={<StarBorder />}
        checkedIcon={<Star />}
      />
    </Container>
  );
};

const Container = styled.div`
  & .MuiButtonBase-root.MuiCheckbox-root {
    color: #cccccc;
    padding: 1px;
    cursor: ${({ $isClickable }) => ($isClickable ? `pointer` : `default`)};
  }

  & .MuiButtonBase-root.MuiCheckbox-root.Mui-checked {
    color: #ff4623;
  }

  & .MuiSvgIcon-root {
    width: ${({ $size }) => $size && $size};
    height: ${({ $size }) => $size && $size};
  }
`;
