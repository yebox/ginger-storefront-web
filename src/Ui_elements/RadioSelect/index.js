import Radio from '@mui/material/Radio';
import styled from 'styled-components'

const StyledRadio = styled(Radio)`
  input {
    color: var(--primary-color) !important; 
  }

  &.Mui-checked {
    color: var(--primary-color) !important; 
  }
`;

export const GRadioSelect = ({ name }) => {
  const handleChange = (event) => {
    // Handle change logic here
  };

  return (
    <StyledRadio
      onChange={handleChange}
      inputProps={{ 'aria-label': name }}
    />
  );
};