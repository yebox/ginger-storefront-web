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

export const GRadioSelect = ({ name, value, selected, onChange }) => {
  
  return (
    <StyledRadio
      checked={selected}
      onChange={onChange}
      value={value}
      name="radio-buttons"
      inputProps={{ 'aria-label': name }}
    />
  );
};