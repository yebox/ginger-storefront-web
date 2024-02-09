import styled from "styled-components"
import { DollarShield, Star } from "../../../Assets/Svgs"
import { Button } from "../../../Ui_elements"
export const FeatureProducts = () => {
    return (
        <Container>
            <img
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <SellerRate>
                <div>
                    <p>Seller:</p>
                    <p>Rosalind</p>
                </div>

                <div>
                    <p>4.5</p>
                    <Star />
                </div>

            </SellerRate>
            <Itemdetail>
                <p>Nairobi Wrapp-It Shine Foaming Lotion 8oz</p>
            </Itemdetail>

            <RRPContainer>
                <div>
                    <DollarShield />
                    <p>RRP</p>
                </div>

                <p>₦5,500</p>
            </RRPContainer>

            <Price>₦87,260</Price>

            <Button
                label={"Add to Cart"}
            />
        </Container>
    )
}


const Container = styled.div`
    width: 18.3rem;

    img{
        width: inherit;
        height: 19rem;
        object-fit: cover;
    }
`

const SellerRate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    }
`

const Itemdetail = styled.div`
    margin-top: 1rem;
    p{
        font-size: 1.2rem;
    }
`

const RRPContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
    >div{
        display: flex;
        gap: 8px;
        align-items: center;
    }
`

const Price = styled.h6`
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
`