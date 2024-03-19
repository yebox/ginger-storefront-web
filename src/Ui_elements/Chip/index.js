import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Chip = ({ children, to, index, activeIndex, ...otherProps }) => {
    console.log(activeIndex, index, "inside chip")
    console.log(index, "index")
    return (
        <Container
            to={to}
            active={activeIndex === index}
            {...otherProps}
        >
            <p>{children}</p>
        </Container>
    )
}


const Container = styled(Link)`
    border: 1px solid var(--gray-100);
    background-color: ${({ active }) => active ? "var(--black)" : "transparent"};
    transition: all 0.3s ease;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 100px;
    cursor: pointer;
    p {
        transition: all 0.3s ease;
        color: ${({ active }) => active ? "white" : "var(--black)"};
    }
    &:hover {
        background-color: var(--black);
        p {
            color: white;
        }
    }
`;