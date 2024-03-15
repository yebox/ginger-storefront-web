import styled from 'styled-components'
import { GrayCart } from '../../../../Assets/Svgs'
import { formatAmount, IMAGE_BASE_URL } from '../../../../Utils'

export const CheckoutItemCard = ({item}) => {
    return (
        <Container>
            <img
                src={`${IMAGE_BASE_URL}${item?.image}`}
            />
            <DetailsContainer>
                <TitlePrice>
                    <h6>
                        {item?.product}
                    </h6>

                    <b>₦{formatAmount(item?.price)}</b>
                </TitlePrice>
                <Details>
                    <div>
                        <GrayCart />
                        <p>: {item?.quantity} item</p>
                    </div>
                    {/* <div>
                        <p>12Floz (276ml)</p>
                    </div> */}
                </Details>
            </DetailsContainer>
        </Container>
    )
}


const Container = styled.div`
    padding: 10px;
    width: 40vw;
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
        border-radius: 5px;
        background-color: var(--hover-color);
    }
`

const DetailsContainer = styled.div`
    width: 100%;
`

const TitlePrice = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
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