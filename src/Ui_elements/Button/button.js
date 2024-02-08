import { devices } from "../../Utils"
import { Spinner } from "../Spinner/spinner"
import { styled } from "styled-components"

export const Button = ({
    label,
    width,
    outline,
    alternate,
    alternateOutline,
    icon,
    isLoading,
    ...otherProps
}) => {
    return (
        <ButtonEl
            width={width}
            outline={outline}
            alternate={alternate}
            alternateOutline={alternateOutline}
            {...otherProps}
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
    )
}


const ButtonEl = styled.button`
    display: flex;
    align-items: center;
    background-color: ${({ outline, alternate, alternateOutline }) =>
        outline ? "transparent" : alternate ? "white" : alternateOutline ? "transparent" : "var(--black)"};
    color: ${({ outline, alternate }) => ((outline || alternate) ? "var(--black)" :  "#ffffff")};
    font-weight: 500;
    padding: 1rem 1.5rem;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: ${({ width }) => (width ? width + "px" : "100%")};
    border-radius: 2px;
    outline: none;
    border: ${({ outline, alternateOutline }) =>
        outline ? "1px solid var(--black)" : alternateOutline ? "1px solid white" : "none"};
    cursor: pointer;

    @media ${devices.tablet} {
    width: 100% !important;
  }

`