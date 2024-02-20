import styled from 'styled-components'

import {
    GBreadCrumbs,
    GButton,
    GCheckbox,
    GSelectField,
    GTextField
} from '../../../Ui_elements'
import { InstaFooter } from '../Components'
import { CheckoutItemCard, PriceDetails, Total } from './components'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()
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
                        <GTextField
                            placeholder={"Address"}
                        />
                        <GTextField
                            placeholder={"Apartment/Suite (optional)"}
                        />

                        <FormFlex>
                            <GTextField
                                placeholder={"City"}
                            />
                            <GTextField
                                placeholder={"State"}
                            />
                        </FormFlex>

                        <GSelectField
                            searchable={true}
                            placeholder={"Country"}
                        />

                        <GTextField
                            placeholder={"Zip code"}
                        />

                        <GTextField
                            placeholder={"Phone"}
                        />

                        <CheckContainer>
                            <GCheckbox />
                            <p>Save this information for next time</p>
                        </CheckContainer>

                    </InformationSection>

                    
                    <GButton
                        label={"Continue"}
                        width={"50%"}
                        onClick={()=>navigate('/cart/information/address')}
                    />
                </CheckoutContainer>
                <ItemDetailsContainer>
                    <CardsContainer>
                        <CheckoutItemCard />
                        <CheckoutItemCard />
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
                            <Total/>
                        </TotalContainer>
                    </PriceDetailsContainer>
                </ItemDetailsContainer>
            </Body>
            <InstaFooter/>
        </Container>
    )
}

export default Checkout

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
    width:100%;
    flex: 1;
`

const ItemDetailsContainer = styled.aside`
    padding-left: 40px;
    border-left: 1px solid var(--gray-200);
    position: relative;
    top: 0;
`

const FormFlex = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap:40px;
`

const CheckContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10%;
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