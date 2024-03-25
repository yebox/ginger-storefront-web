import styled from 'styled-components'
import { EmptyCubeIcon } from '../../../../../Assets/Svgs'
import { GButton } from '../../../../../Ui_elements'

export const EmptyInventory = () => {
    return (
        <Container>
            <Content>
                <IconHolder>
                    <EmptyCubeIcon />
                    <p>You have not created any product</p>
                </IconHolder>

                <GButton
                    label={"+ Create a new product"}
                />
            </Content>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:30px;

`

const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
`