import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from "../../Utils";

export const GNumberField = ({
    placeholder,
    isDisabled = false,
    required,
    min = 0,
    value,
    name = "",
    error = false,
    defaultValue,
    errorText = "",
    onChange = () => { },
    register = () => { },
    setValue = () => { },
    ...props
}) => {
    const [isFocus, setIsFocus] = useState(false);

    const errorClass = `${error && "error"} ${required ? "required" : ""}`;
    const [inputValue, setInputValue] = useState(defaultValue);

    const decreaseValue = () => {
        if (!isDisabled && inputValue > min) {
            const newValue = inputValue - 1;
            setInputValue(newValue);
            setValue(name, newValue);
            onChange(newValue);
        }
    };

    const increaseValue = () => {
        if (!isDisabled) {
            const newValue = inputValue + 1;
            setInputValue(newValue);
            setValue(name, newValue);
            onChange(newValue);
        }
    };

    return (
        <InputContainer>
            <InputWrapper
                $isFocus={isFocus}
                $isError={error}
                $isDisabled={isDisabled}
            >
                <Input
                    {...props}
                    type="number"
                    id={props.name}
                    className={errorClass}
                    value={inputValue}
                    step="1"
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    $isDisabled={isDisabled}
                    min={1}
                    onChange={(e) => {
                        const newValue = parseInt(e.target.value);
                        setInputValue(newValue);
                        onChange(newValue);
                    }}
                    {...register(name, { required })}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                <InputIcons $isFocus={isFocus}>
                    <PlusMinusButton onClick={decreaseValue}>-</PlusMinusButton>
                    <PlusMinusButton onClick={increaseValue}>+</PlusMinusButton>
                </InputIcons>
            </InputWrapper>
            <div>{errorText.length > 0 && <Error>{errorText}</Error>}</div>
        </InputContainer>
    );
};

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

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

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

    &:disabled {
        cursor: not-allowed;
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

const InputIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

const PlusMinusButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #151515;
    padding: 0 8px;
    line-height: 1;
`;

const Error = styled.div`
    color: #d21f37;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
`;
