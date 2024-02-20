import styled from 'styled-components'

export const PriceDetails = () => {
    return (
        <Container>
            <Item>
                <p>Subtotal</p>
                <h6>₦19 000</h6>
            </Item>

        </Container>
    )
}


const Container = styled.div`
    border-bottom: 1px solid var(--lower-nav);
    border-top: 1px solid var(--lower-nav);
    padding: 30px 0;

    p{
        color: var(--gray-300);
        font-size: 1.1rem;
    }
    h6{
        font-size: 1.3rem;
    }
`
const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`