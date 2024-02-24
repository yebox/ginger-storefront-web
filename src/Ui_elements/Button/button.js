import { devices } from "../../Utils";
import { Spinner } from "../Spinner";
import { styled } from "styled-components";

export const GButton = ({
  label,
  width,
  type,
  fontsize,
  paddingProp,
  outline,
  icon,
  isLoading,
  isDisabled,
  alternate,
  alternateOutline,
  onClick,
  ...otherProps
}) => {
  return (
    <ButtonEl
      width={width}
      $fontsize={fontsize}
      $paddingProp={paddingProp}
      type={type}
      onClick={onClick}
      outline={outline}
      disabled={isDisabled}
      alternate={alternate}
      alternateOutline={alternateOutline}
      {...otherProps}
    >
      {isLoading ? (
        <Spinner
          width={20}
          height={20}
          color={outline ? "var(--black)" : "white"} />
      ) : (
        <>
          {typeof label === 'string' ? label : label()}
          {icon && <div>{icon}</div>}
        </>
      )}
    </ButtonEl>
  );
};

const ButtonEl = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ outline, alternate, alternateOutline }) =>
    outline
      ? "transparent"
      : alternate
        ? "white"
        : alternateOutline
          ? "transparent"
          : "var(--black)"};
  color: ${({ outline, alternate }) =>
    outline || alternate ? "var(--black)" : "#ffffff"};
  font-weight: 500;
  padding: ${({ $paddingProp }) =>
    $paddingProp ? $paddingProp : "1rem 1.5rem"};
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : "1rem")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  outline: none;
  border: ${({ outline, alternateOutline }) =>
    outline
      ? "1px solid var(--black)"
      : alternateOutline
        ? "1px solid white"
        : "none"};
  cursor: pointer;
  transition: all 0.25s ease;

  &:disabled {
    background: var(--black50);
    cursor: not-allowed;
  }

  @media ${devices.tablet} {
    width: 100% !important;
  }
`;
