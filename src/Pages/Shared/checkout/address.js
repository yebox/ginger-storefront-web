import styled from 'styled-components'
import { RedRightArrow } from '../../../Assets/Svgs'
import { useState } from 'react'
import {
    GBreadCrumbs,
    GButton,
    GCheckbox,
} from '../../../Ui_elements'
import { InstaFooter } from '../Components'
import { CheckoutItemCard, SelectCard, PriceDetails, Total } from './components'
import { useNavigate } from 'react-router-dom';

const Address = () => {

    const [selectedCard, setSelectedCard] = useState(null);

    const navigate = useNavigate()

    const data = [
        {
            id: 0,
            item: "20a wallstreet junction, Ibadan, Nigeria."
        },
        {
            id: 1,
            item: "Liberty Estate, Enugu, Nigeria."
        },
    ]

    return (
        <Container>

            <BreadContainer>
                <GBreadCrumbs />
            </BreadContainer>
            <Body>
                <CheckoutContainer>
                    <h5>Checkout</h5>
                    <InformationSection>
                        <h6>Delivery Information</h6>
                        {data.map((item) => (
                            <SelectCard
                                key={item.id}
                                id={item.id}
                                selectedCard={selectedCard}
                                item={item.item}
                                onClick={() => setSelectedCard(item.id)}
                            />
                        ))}
                        <Add>
                            <p>Add a different address</p>
                            <RedRightArrow />
                        </Add>
                    </InformationSection>

                    <CheckContainer>
                        <GCheckbox />
                        <p>Save this information for next time</p>
                    </CheckContainer>


                    <GButton
                        label={"Continue"}
                        width={"50%"}
                        onClick={()=>navigate("/cart/information/payment")}
                    />
                </CheckoutContainer>
                <ItemDetailsContainer>
                    <CardsContainer>
                        <CheckoutItemCard />
                        <CheckoutItemCard />
                        {/* <CheckoutItemCard />
                        <CheckoutItemCard />
                        <CheckoutItemCard />
                        <CheckoutItemCard /> */}
                    </CardsContainer>

                    <PriceDetailsContainer>
                        <PriceDetails
                            title={"Subtotal"}
                            price={"₦19 000"}
                        />
                        <PriceDetails
                            title={"Shipping"}
                            price={"₦21 000"}
                        />

                        <TotalContainer>
                            <Total />
                        </TotalContainer>
                    </PriceDetailsContainer>
                </ItemDetailsContainer>
            </Body>
            <InstaFooter />
        </Container>
    )
}

export default Address

const Container = styled.main`

`
const BreadContainer = styled.section`
    padding:3% 5%;
`
const Body = styled.section`
    display: flex;
    padding: 0 5%;
    width: 100%;
    gap: 40px;
    height: 100vh;
    position: relative;
    height: 100vh;
    overflow-y: auto; 
    margin-bottom: 10vh;
`

const CheckoutContainer = styled.aside`  
    flex: 1;
    h5{
        font-size: 2rem;
        margin-bottom: 50px;
        font-weight: 500;
    }
`

const InformationSection = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width:80%;
    flex: 1;
`

const ItemDetailsContainer = styled.aside`
    padding-left: 40px;
    border-left: 1px solid var(--gray-200);
    position: relative;
    top: 0;
`


const CardsContainer = styled.div`
    flex-direction: column;
    display: flex;
    gap: 20px;
    height: 70%;
    overflow-y: auto;
`
const PriceDetailsContainer = styled.div`
    width: 100%;
    padding-left: 40px;
`

const TotalContainer = styled.div`

`
const Add = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    p{
        font-size: 1rem;
        color: var(--primary-color);
        font-size: 500;
    }
`
const CheckContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 20% 0 10% 0;
    
`