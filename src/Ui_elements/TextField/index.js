import React, { useMemo, useState } from "react";
import { inputTypesData } from "./data";
import { styled } from "styled-components";

/**
 * inputType is to choose between "textarea" or 'input'
 * error is the error state of the textField
 * errorText holds the error message if you want to show one
 * endIcon is any component that displays at the end of the text field
 */

const TextField = ({
  placeholder,
  isDisabled = false,
  required,
  inputType = "text",
  min,
  name = "",
  error = false,
  errorText = "",
  onChange = () => {},
  register = () => {},
  endIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const togglePassword = () => (showPassword ? "password" : "text");

  const inputData = useMemo(
    () => inputTypesData.find((x) => x.name === inputType),
    [inputType]
  );
  const EndIcon = useMemo(() => inputData?.endIcon, [inputData]);

  const errorClass = `${error && "error"} ${required ? "required" : ""}`;

  return (
    <InputContainer>
      <InputWrapper
        $isFocus={isFocus}
        $isError={error}
        $isDisabled={isDisabled}
      >
        <Input
          {...props}
          type={inputType === "password" ? togglePassword() : inputData?.type}
          id={props.name}
          isError={error}
          className={errorClass}
          placeholder={placeholder}
          disabled={isDisabled}
          $isDisabled={isDisabled}
          min={min}
          onChange={onChange}
          {...register(name, { required })}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />

        {endIcon
          ? endIcon
          : EndIcon && (
              <InputIcon
                $isDisabled={isDisabled}
                $isFocus={isFocus}
                onClick={() => setShowPassword((prev) => !prev)}
                className="clickable"
              >
                <EndIcon />
              </InputIcon>
            )}
      </InputWrapper>
      <div>{errorText.length > 0 && <Error>{errorText}</Error>}</div>
    </InputContainer>
  );
};

export { TextField };

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

const Input = styled.input`
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

  :-webkit-autofill {
    -webkit-text-fill-color: #151515;
    opacity: 0.5;
  }

  :focus-visible {
    outline: none;
  }

  //can't combine them
  &::-webkit-input-placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#D21F37" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &::-moz-placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#D21F37" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &::-ms-placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#D21F37" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

  &::placeholder {
    color: ${({ $isDisabled }) => ($isDisabled ? "#D21F37" : "#151515")};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }
`;

const InputWrapper = styled.label`
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

const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  & > svg {
    width: 100%;
    height: 100%;
    opacity: ${({ $isDisabled, $isFocus }) =>
      $isDisabled || !$isFocus ? 0.5 : 1};
  }
`;

const Error = styled.div`
  color: #d21f37;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
`;
