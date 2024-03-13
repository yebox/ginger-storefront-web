import React from 'react';
import styled, { keyframes } from 'styled-components';


export const PageLoader = () => {
    return (
        <Container>
            <Loader />
        </Container>

    );
};


const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const l2 = keyframes`
    100% {
        box-shadow: 0 0 0 40px #0000;
    }
`;

const Loader = styled.div`
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--primary-color);
    box-shadow: 0 0 0 0 var(--primary-color);
    animation: ${l2} 1.5s infinite linear;
    position: relative;

    &:before,
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        box-shadow: 0 0 0 0 var(--hover-color);
        animation: inherit;
        animation-delay: -0.5s;
    }

    &:after {
        animation-delay: -1s;
    }
`;


