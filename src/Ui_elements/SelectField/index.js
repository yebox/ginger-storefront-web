import React from "react";
import Select from "react-select";
import { styled } from "styled-components";

const selectStyles = () => ({
  input: (styles) => ({
    ...styles,
    "&:not(.aui-no-focusvisible) :focus-visible": {
      boxShadow: "none",
      border: "none",
    },
  }),

  menu: (provided) => ({
    ...provided,
    overflowY: "auto",
    scrollbarColor: "transparent",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "7px",
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
    "&:hover": {
      border: "none",
    },
    // border: `1px solid ${isError ? "red" : "#dfe1e6"}`,
    minHeight: "40px",
    color: isDisabled ? "3" : "#97a0af",
    backgroundColor: isDisabled ? "#f4f5f7" : "var(--dark-bg-text-color)",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px",
    fontWeight: 450,
    lineHeight: "20px",
    color: "#97a0af",
  }),
  valueContainer: (styles) => ({
    ...styles,
    borderLeft: "none",
    fontSize: "14px",
    minHeight: "40px",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
    fontSize: "14px",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#42526E",
    fontSize: "14px",
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
  value,
  searchable,
  id,
  isError = false,
  errorText = "",
  ...field
}) => {
  const handleChange = async (value) => {
    const awaitedValue = await value;
    onChange(awaitedValue);
  };

  return (
    <Container>
      <InputWrapper $width={width}>
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          onChange={handleChange}
          styles={selectStyles()}
          isDisabled={disabled}
          isLoading={loading}
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

const Container = styled.div``;

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 0 16px;
  width: ${({ $width }) => ($width ? $width : "100%")};
  box-shadow: ${({ $isFocus, $isError }) =>
    $isError
      ? `0 -1px 0 #D21F37 inset`
      : $isFocus
      ? `0 -1px 0 #151515 inset`
      : `0 -1px 0 #E8E8E8 inset`};
  transition: all 0.25s ease;

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
