import styled from 'styled-components'
import { GrayCart } from '../../../../Assets/Svgs'

export const CheckoutItemCard = () => {
    return (
        <Container>
            <img
                src='https://images.unsplash.com/photo-1617220822996-83b261d07eec?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <div>
                <TitlePrice>
                    <h6>
                        Clairol BW2 Tub Powder Lightener Extra-Strength
                    </h6>

                    <b>₦4 500</b>
                </TitlePrice>
                <Details>
                    <div>
                        <GrayCart />
                        <p>: 1 item</p>
                    </div>
                    <div>
                        <p>12Floz (276ml)</p>
                    </div>
                </Details>
            </div>
        </Container>
    )
}


const Container = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    gap:30px;
    position: sticky;
    top:0;
    border-radius: 8px;
    background-color: var(--lower-nav);
    img{
        width: 116px;
        height: 116px;
        object-fit: cover;
    }
`

const TitlePrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    h6{
        width: 70%;
    }
`

const Details = styled.div`
    display: flex;
    justify-content:flex-start;    
    gap: 20px;
    width: 100%;
    margin-top: 20px;

    >div{
        display: flex;
        align-items: center;
        gap: 10px;

        p{
            color: var(--gray-300);
        }

        &:nth-child(2){
            border-left: 1px solid var(--gray-300);
            padding-left: 20px;
        }
    }
`