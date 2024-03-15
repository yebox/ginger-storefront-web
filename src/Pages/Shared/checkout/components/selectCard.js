import styled from 'styled-components'
// import { RadioSelect } from '../../../../Assets/Svgs'
import { GRadioSelect } from '../../../../Ui_elements'

export const SelectCard = ({
    id,
    selectedCard,
    selectedItem,
    item,
    ...otherProps

}) => {
    return (
        <Container
            {...otherProps}
        >
            <Header>
                <p>Maxwell Philip</p>
                {/* {selectedCard === id && <RadioSelect />} */}
                <GRadioSelect/>
            </Header>
            <Details>
                <p>{item}</p>
                <p>07096885784</p>
            </Details>
        </Container>
    )
}


const Container = styled.div`
    border: 1px solid var(--gray-200);
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }
`

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    p{
        font-size: 14px;
        font-weight: 400;
        color: var(--gray-300);
    }
`
const Details = styled.div`
    p:nth-child(1){
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--gray-300);
        margin-bottom: 20px;
    }
    p:nth-child(2){
        font-size: 14px;
    }
`