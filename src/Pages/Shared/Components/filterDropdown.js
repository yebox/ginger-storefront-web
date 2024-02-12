
import styled from 'styled-components'
import { DownArrow } from '../../../Assets/Svgs'
import { useState } from 'react';

export const FilterDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Header onClick={() => setOpen(!open)}>
                <p>Price N</p>
                <Arrow open={open} />
            </Header>

            <Content isOpen={open}>
                <p>I and jdskjnk</p>
            </Content>
        </Container>
    );
};

const Container = styled.div``;

const Header = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Content = styled.div`
    overflow: hidden;
    background-color: green;
    transition: height 1s ease;
    height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const Arrow = styled(DownArrow)`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ open }) => (open ? 'black' : 'gray')};
    margin-left: 5px;
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;
