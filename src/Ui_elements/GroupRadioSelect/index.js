import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "styled-components";
import { devices } from "../../Utils";

export const GRadioButtonsGroup = ({
  name,
  value,
  handleChange,
  options,
  row,
}) => {
  return (
    <Container $row={row}>
      <RadioGroup
        aria-labelledby={`${name}controlled-radio-buttons-group`}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map(({ label, value }, idx) => (
          <FormControlLabel
            key={idx}
            value={value}
            control={
              <Radio
                sx={{
                  color: `#FF4623`,
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                    color: `#FF4623`,
                  },
                }}
              />
            }
            label={label}
          />
        ))}
      </RadioGroup>
    </Container>
  );
};

const Container = styled(FormControl)`
  .MuiFormGroup-root {
    gap: 10px;
    flex-direction: ${({ $row }) => ($row ? `row` : `column`)};
  }

  .MuiTypography-root {
    margin-top: -1px;
    color: var(--Black-500, #151515);
    font-family: "Barlow";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }

  .MuiFormControlLabel-root {
    gap: ${({ $row }) => ($row ? `0` : `10px`)};
  }

  @media ${devices.mobileL} {
    .MuiTypography-root {
      font-size: 16px;
    }

    .MuiFormControlLabel-root,
    .MuiFormGroup-root {
      gap: 4px;
    }
  }
`;
