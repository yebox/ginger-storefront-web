import { devices } from "../../Utils";
import { Spinner } from "../Spinner/spinner";
import { styled } from "styled-components";

export const Button = ({
  label,
  width,
  outline,
  icon,
  isLoading,
  isDisabled,
  ...otherProps
}) => {
  return (
    <ButtonEl
      width={width}
      outline={outline}
      {...otherProps}
      disabled={isDisabled}
    >
      {isLoading ? (
        <Spinner color={outline ? "var(--black)" : "white"} />
      ) : (
        <>
          {label}
          {icon && <div>{icon}</div>}
        </>
      )}
    </ButtonEl>
  );
};

const ButtonEl = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ outline }) =>
    outline ? "transparent" : "var(--black)"};
  color: ${({ outline }) => (outline ? "var(--black)" : "white")};
  font-weight: 500;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  border-radius: 2px;
  outline: none;
  border: ${({ outline }) => (outline ? "1px solid var(--black)" : "none")};
  cursor: pointer;

  &:disabled {
    background: var(--black50);
    cursor: not-allowed;
  }

  @media ${devices.tablet} {
    width: 100% !important;
  }
`;
