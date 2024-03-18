import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { styled } from "styled-components";

export const GFavoriteIcon = ({ checked, handleChange }) => {
  const label = { inputProps: { "aria-label": "favorite icon" } };
  return (
    <Container>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={checked}
        onChange={handleChange}
      />
    </Container>
  );
};

const Container = styled.div`
  & .MuiButtonBase-root.MuiCheckbox-root.Mui-checked {
    color: #ff4623;
  }
`;
