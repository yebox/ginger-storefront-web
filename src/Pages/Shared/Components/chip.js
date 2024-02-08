import styled from "styled-components"

export const Chip = ({children, index, activeIndex, ...otherProps}) => {
    return (
        <Container
            index={index}
            activeIndex={activeIndex}
            {...otherProps}
        >
            <p>{children}</p>
        </Container>
    )
}


const Container = styled.div`
    border: 1px solid var(--gray-100);
    background-color: ${({activeIndex, index}) => activeIndex === index ? "var(--black)" : "transparent"};
    transition: all 0.3s ease;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 100px;
    cursor: pointer;
    p{
        transition: all 0.3s ease;
        color: ${({activeIndex, index}) => activeIndex === index ? "white" : "var(--black)"};
    }
    &:hover{
        background-color: var(--black);
        p{
            color: white;
        }
    }
`