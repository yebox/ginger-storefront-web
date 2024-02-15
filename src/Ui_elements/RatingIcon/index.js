import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import StarBorder from "@mui/icons-material/StarOutlined";
import Star from "@mui/icons-material/Star";
import { styled } from "styled-components";

export const GRatingIcon = ({ isChecked = false }) => {
  const label = { inputProps: { "aria-label": "rating icon" } };
  const [checked, setChecked] = useState(isChecked);
  return (
    <Container>
      <Checkbox
        onClick={() => setChecked(!checked)}
        {...label}
        checked={checked}
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
  }

  & .MuiButtonBase-root.MuiCheckbox-root.Mui-checked {
    color: #ff4623;
  }
`;
