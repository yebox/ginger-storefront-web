import Modal from '@mui/material/Modal';
import styled from 'styled-components'


export const GModal = ({ open, handleClose, children }) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Container>
                {children}
            </Container>
        </Modal>
    )
}


const Container = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    background-color: white;
    box-shadow: 10;
    border: none;
    outline: none;
`

