
import styled from 'styled-components'
import { DownArrow } from '../../../Assets/Svgs'
import { useState } from 'react';

export const FilterDropdown = ({
    content,
    title
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Header onClick={() => setOpen(!open)}>
                <p>{title}</p>
                <Arrow open={open}>
                    <DownArrow />
                </Arrow>
            </Header>

            <Content isOpen={open}>
                {content}
            </Content>
        </Container>
    );
};

const Container = styled.div``;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    padding: 10px;
    background-color: var(--light-yellow);

`;

const Content = styled.div`
    overflow: hidden;
    transition: height 1s ease;
    height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    margin-top: 1rem;
`;

const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;
