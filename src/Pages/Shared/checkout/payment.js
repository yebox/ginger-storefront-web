import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AmericanExpress, LogoPayment, Mastercard, Paypal, Sofort, Visa } from '../../../Assets/Svgs'
import {
    GBreadCrumbs,
    GButton,
    GCheckbox,
    GModal,
    GRadioSelect,
    GTextField,
} from '../../../Ui_elements'
import { InstaFooter } from '../Components'
import { useState } from 'react'
import { CheckoutItemCard, PriceDetails, SelectCard, Total, Modal } from './components'

const Payment = () => {
    const [ showModal, setShowModal] = useState(true)

    return (
        <Container>

            <GModal
                open={showModal}
                handleClose={() => setShowModal(false)}
            >
                <Modal/>
            </GModal>

            <BreadContainer>
                <GBreadCrumbs />
            </BreadContainer>
            <Body>
                <CheckoutContainer>
                    <h5>Checkout</h5>
                    <InformationSection>
                        <h6>Payment</h6>

                        <SelectItems>
                            <div>
                                <GRadioSelect />
                                <p>Credit card</p>
                            </div>

                            <div>
                                <Visa />
                                <Mastercard />
                                <AmericanExpress />
                            </div>

                        </SelectItems>

                        <SelectCard

                        />

                        <Form>
                            <GTextField
                                placeholder={"Card number"}
                            />
                            <GTextField
                                placeholder={"Name on card"}
                            />

                            <FormFlex>
                                <GTextField
                                    placeholder={"Expiration date (MM/YY)"}
                                />
                                <GTextField
                                    placeholder={"Security code"}
                                />
                            </FormFlex>
                        </Form>

                        <Add>
                            <p>+</p>
                            <p>Add a different address</p>
                        </Add>

                        <SelectItems>
                            <div>
                                <GRadioSelect />
                                <p>Your Wallet</p>
                            </div>

                            <div>
                                <LogoPayment />
                            </div>

                        </SelectItems>

                        <SelectItems>
                            <div>
                                <GRadioSelect />
                                <Paypal />
                            </div>
                        </SelectItems>

                        <SelectItems>
                            <div>
                                <GRadioSelect />
                                <Sofort />
                            </div>
                        </SelectItems>



                    </InformationSection>

                    <DetailsContainer>
                        <Flex>
                            <h6>Recipient Details</h6>
                            <p>Update Details</p>
                        </Flex>

                        <DetailItem>
                            <p>Contact</p>
                            <p>07086577431</p>
                        </DetailItem>

                        <DetailItem>
                            <p>Address</p>
                            <p>20a wallstreet junction, ibadan, Nigeria</p>
                        </DetailItem>

                        <DetailItem>
                            <p>Shipping method</p>
                            <p>DHL Logistics</p>
                        </DetailItem>
                    </DetailsContainer>


                    <Remember>Remember me</Remember>
                    <CheckContainer>
                        <GCheckbox />
                        <p>Save this information for next time</p>
                    </CheckContainer>

                    <Terms>
                        <p>By clicking below and completing your order,
                            you agree to purchase your item(s) from
                            Global-e as merchant of record for this
                            transaction, on Global-e&apos;s <span><Link>Terms and Conditions</Link></span>
                            and <span><Link>Terms and Conditions</Link></span>. Global-e is an international
                            fulfilment service provider to John Hardy
                        </p>
                    </Terms>
                    <GButton
                        label={"Continue"}
                        width={"50%"}
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
                            <Total />
                        </TotalContainer>
                    </PriceDetailsContainer>
                </ItemDetailsContainer>
            </Body>
            <InstaFooter />
        </Container>
    )
}

export default Payment

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
    /* height: 100vh; */
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

const Remember = styled.h4`
    margin-bottom: 20px !important;
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
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
    margin: 5% 0 10% 0;
    
`

const SelectItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`
const FormFlex = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap:40px;
`
const Form = styled.form`
    gap: 3rem;
    display: flex;
    flex-direction: column;

`

const DetailsContainer = styled.div`
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    padding: 40px 0 ;
    width: 80%;
    margin: 40px 0;
`

const DetailItem = styled.div`
    margin-top: 2.2rem;
    p:nth-child(1){
        color: var(--gray-250);
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
    p:nth-child(2){
        font-size: 1.2rem;
    }
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Terms = styled.div`
    margin-bottom: 20%;
    a{
        color: var(--primary-color);
        text-decoration: underline;
    }
`