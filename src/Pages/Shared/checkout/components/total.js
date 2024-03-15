import styled from 'styled-components'

export const Total = ({price}) => {
    return (
        <Container>
            <Item>
                <p>Total</p>
                <h6>₦ {price}</h6>
            </Item>

            <Notes>Signature required upon delivery.</Notes>
            <Notes>Orders placed before 1pm ET will ship on the same day.</Notes>

        </Container>
    )
}


const Container = styled.div`
    border-bottom: 1px solid var(--lower-nav);
    border-top: 1px solid var(--lower-nav);
    padding: 30px 0;
    h6{
        font-size: 1.3rem;
    }
`
const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    p{
        color: var(--gray-300);
        font-size: 25px;
        font-weight: 500;
    }
`

const Notes = styled.p`
    color: var(--gray-300);
    font-size: 12px;
`   