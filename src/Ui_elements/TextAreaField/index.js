import React, { useState } from "react";
import { styled } from "styled-components";

/**
 * error is the error state of the textField
 * errorText holds the error message if you want to show one
 */

export const GTextAreaField = ({
  placeholder,
  isDisabled = false,
  required,
  min,
  name = "",
  error = false,
  errorText = "",
  maxChars,
  value,
  onChange = () => {},
  register = () => {},
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const errorClass = `${error && "error"} ${required ? "required" : ""}`;

  return (
    <Container>
      <Wrapper $isFocus={isFocus} $isError={error} $isDisabled={isDisabled}>
        <TextArea
          {...props}
          value={value}
          id={props.name}
          className={errorClass}
          placeholder={placeholder}
          disabled={isDisabled}
          $isDisabled={isDisabled}
          rows={3}
          min={min}
          onChange={onChange}
          {...register(name, { required })}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {maxChars && <MaxChar>{`${value.length || 0}/${maxChars}`}</MaxChar>}
      </Wrapper>
      {errorText.length > 0 && <Error>{errorText}</Error>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: stretch;
  color: #151515;
  background: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  resize: none;

  :-webkit-autofill {
    -webkit-text-fill-color: #151515;
    opacity: 0.5;
  }

  :focus-visible {
    outline: none;
  }

  //can't combine them
  &::-webkit-input-placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#626262" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &::-moz-placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#626262" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &::-ms-placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#626262" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &::placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#626262" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Wrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 0 16px;
  box-shadow: ${({ $isFocus, $isError }) =>
    $isError
      ? `0 -1px 0 #D21F37 inset`
      : $isFocus
      ? `0 -1px 0 #151515 inset`
      : `0 -1px 0 #E8E8E8 inset`};
  transition: all 0.25s ease;
  cursor: text;

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

const MaxChar = styled.p`
  position: absolute;
  right: 0;
  bottom: 12px;
  color: var(--Black-500, #151515);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  opacity: 0.5;
`;
