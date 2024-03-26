import { devices } from "../../Utils";
import { Spinner } from "../Spinner";
import { styled } from "styled-components";

export const GButton = ({
  label,
  width,
  mbWidth,
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
      $mbWidth={mbWidth}
      $fontsize={fontsize}
      $paddingProp={paddingProp}
      type={type}
      onClick={onClick}
      $outline={outline}
      disabled={isDisabled}
      $alternate={alternate}
      $alternateOutline={alternateOutline}
      {...otherProps}
    >
      {isLoading ? (
        <Spinner
          width={20}
          height={20}
          color={outline ? "var(--black)" : "white"}
        />
      ) : (
        <>
          {typeof label === "string" ? label : label()}
          {icon && <div>{icon}</div>}
        </>
      )}
    </ButtonEl>
  );
};

const ButtonEl = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ $outline, $alternate, $alternateOutline }) =>
    $outline
      ? "transparent"
      : $alternate
      ? "white"
      : $alternateOutline
      ? "transparent"
      : "var(--black)"};
  color: ${({ $outline, $alternate }) =>
    $outline || $alternate ? "var(--black)" : "#ffffff"};
  font-weight: 500;
  padding: ${({ $paddingProp }) =>
    $paddingProp ? $paddingProp : "1rem 1.5rem"};
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : "16px")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  outline: none;
  border: ${({ $alternateOutline }) =>
    $alternateOutline ? "1.5px solid white" : "1.5px solid #151515"};
  cursor: pointer;
  opacity: 0.95;
  transition: all 0.25s ease;

  &:disabled {
    background: var(--black50);
    border: 1.5px solid var(--black50);
    cursor: not-allowed;
  }

  &:hover {
    opacity: 1;
  }

  /* @media ${devices.tablet} {
    width: 100% !important;
  } */

  @media ${devices.mobileL} {
    padding: ${({ $paddingProp }) =>
      $paddingProp ? $paddingProp : "0.7rem 1rem"};
    width: ${({ $mbWidth }) => ($mbWidth ? $mbWidth : "100%")};
    font-size: 14px;
  }
`;
