import React, { useState } from "react";
import Select from "react-select";
import { styled } from "styled-components";

const selectStyles = () => ({
  input: (styles) => ({
    ...styles,
    margin: "0px",
    "&:not(.aui-no-focusvisible) :focus-visible": {
      boxShadow: "none",
      border: "none",
    },
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "var(--Primary-50, #FFECE9)" : "white",
    color: "var(--Black-500, #151515)",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    overflowY: "auto",
    scrollbarColor: "var(--Primary-500, #FF4623)",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent !important",
      borderRadius: "2.5px",
      height: "50px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent !important",
      borderBottomRightRadius: "16px",
    },
    "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
      background: "transparent",
    },
  }),
  control: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    borderRadius: "4px",
    border: "none",
    boxShadow: isFocused ? 0 : 0,
    cursor: "pointer",
    "&:hover": {
      border: "none",
    },
    minHeight: "40px",
    color: isDisabled ? "3" : "#97a0af",
    backgroundColor: isDisabled ? `var(--Black-100, #B6B6B6)` : "transparent",
  }),
  placeholder: (styles, { isDisabled }) => ({
    ...styles,
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Barlow",
    opacity: "0.5",
    lineHeight: "120%",
    color: isDisabled ? "#D21F37" : "#151515",
    margin: "0px",
  }),
  valueContainer: (styles, { isDisabled }) => ({
    ...styles,
    borderLeft: "none",
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "400",
    paddingBottom: "14px",
    minHeight: "40px",
    color: isDisabled ? "#D21F37" : "#151515",
    padding: `0px`,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
    fontSize: "14px",
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#151515" : "#B6B6B6",
    marginBottom: "6px",
    fontSize: "14px",
    transition: "all 0.25s ease",
    "&:hover": {
      color: "#151515",
    },
  }),
  autosizeInput: (styles) => ({
    ...styles,
    "&:not(.aui-no-focusvisible) :focus-visible": { boxShadow: "none" },
  }),
});

export const GSelectField = ({
  options = [],
  onChange = () => {},
  width = "100%",
  placeholder,
  disabled,
  loading,
  defaultInputValue,
  isMulti,
  value,
  searchable,
  id,
  isError = false,
  errorText = "",
  ...field
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = async (value) => {
    const awaitedValue = await value;
    onChange(awaitedValue);
  };

  return (
    <Container>
      <InputWrapper $width={width} $isFocus={isFocus} $isError={isError}>
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          onChange={handleChange}
          styles={selectStyles()}
          isMulti={isMulti}
          isDisabled={disabled}
          isLoading={loading}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          defaultInputValue={defaultInputValue}
          value={value}
          isSearchable={searchable}
          id={id}
        />
      </InputWrapper>
      <div>{isError && <Error>{errorText}</Error>}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  width: ${({ $width }) => ($width ? $width : "100%")};
  box-shadow: ${({ $isFocus, $isError }) =>
    $isError
      ? `0 -1px 0 #D21F37 inset`
      : $isFocus
      ? `0 -1px 0 #151515 inset`
      : `0 -1px 0 #E8E8E8 inset`};
  transition: all 0.25s ease;

  & > div {
    width: 100%;
  }

  &.error {
    border: 1px solid #d21f37;
  }
`;

const Error = styled.div`
  color: #d21f37;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
`;
