import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components'


export const PopMenu = ({ menuItems, children, otherProps }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Wrapper
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {children}
            </Wrapper>
            <Menu
                elevation={2}
                id="customized-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                {...otherProps}
            >
                {menuItems.map((menuItem, index) => (
                    <CustomMenuItem
                        key={index}
                        menuItem={menuItem.item}
                        action={menuItem.action}
                        handleClose={handleClose}
                    />
                ))}
            </Menu>
        </>
    );
};

const CustomMenuItem = ({ menuItem, action, handleClose }) => {
    const handleItemClick = () => {
        action();
        handleClose();
    };

    return (
        <MenuContainer>
            <MenuItem onClick={handleItemClick}>
                <BorderItem>
                    <p>{typeof (menuItem) === "function" ? menuItem() : menuItem}</p>
                </BorderItem>

            </MenuItem>
        </MenuContainer>

    );
};

const Wrapper = styled.div`
    height: auto;
    cursor: pointer;
`

const MenuContainer = styled.div`
    width: auto;
    border-radius: 30px;
`


const BorderItem = styled.div`
    /* border-bottom: 1px solid red; */
`