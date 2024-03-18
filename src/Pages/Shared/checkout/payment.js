import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AmericanExpress, LogoPayment, Mastercard, Paypal, Sofort, Visa } from '../../../Assets/Svgs'
import {
    GBreadCrumbs,
    GButton,
    GCheckbox,
    GModal,
    GRadioSelect,
    GTextField,
    LineLoader,
} from '../../../Ui_elements'
import { InstaFooter } from '../Components'
import { useState, useEffect } from 'react'
import { CheckoutItemCard, PriceDetails, SelectCard, Total, Modal } from './components'
import { formatAmount, formatCardNumber } from '../../../Utils'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CardDetailsSchema } from './schema'
import { useApiSend } from '../../../Hooks'
import { createOrder, makePayment } from '../../../Urls'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

const Payment = () => {
    const [showModal, setShowModal] = useState(true)
    const location = useLocation()
    const [currentUrl, setCurrentUrl] = useState('')
    const [paymentMethod, setPaymentMethod] = useState("");
    const [modalType, setModalType] = useState('processing')
    const [showForm, setShowForm] = useState(false);
    const user = useSelector(state => state.user)
    const params = new URLSearchParams(location.search)
    const transformDataString = params.get('data');
    const totalPriceString = params.get('totalPrice')
    const addressString = params.get('address')
    const phoneNumberString = params.get('mobileNumber')
    const totalPrice = JSON.parse(decodeURIComponent(totalPriceString))
    const transformData = JSON.parse(decodeURIComponent(transformDataString));
    const address = JSON.parse(decodeURIComponent(addressString))
    const phoneNumber = JSON.parse(decodeURIComponent(phoneNumberString))
    const shipping = 2000

    useEffect(() => {
        setCurrentUrl(window.location.href)
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty, isValid }
    } = useForm({
        resolver: yupResolver(CardDetailsSchema)
    })

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        setShowForm(event.target.value === 'creditCard');
    };

    const { mutate: makePaymentRequest, isPending: isMakingPayment } = useApiSend(
        makePayment,
        (data) => {
            toast.success('Order created!')
            setModalType('confirmed')
            window.location.href = data
        },
        (data) => {
            console.log(data, "payment")
            toast.error('Payment failed. Please refresh and try again')
            setModalType('failed')
        }
    )


    const { mutate, isPending } = useApiSend(
        createOrder,
        (data) => {
            setShowModal(true)
            console.log(data, "order data")
            const body = {
                orderId: data?.id,
                userId: user._id,
                userEmail: user.email,
                callbackUrl: `https://ginger-storefront-web.vercel.app/cart`
            }
            makePaymentRequest(body)
            if (data.statusCode === 400) {
                toast.error(data.message)
                setModalType('failed')
            }
        },
        (e) => {
            toast.error(`${e.message}`)
            setShowModal(false)
        }
    )

    const onSubmit = () => {
        console.log('submitted')
        const items = transformData.map((item) =>
        ({
            productId: item?._id,
            quantity: item?.quantity
        })
        )
        const body = {
            items,
            price: totalPrice,
            deliveryAddress: { ...address },
            deliveryDate: "2024-03-16T08:35:16.226Z",
            dateDelivered: "2024-03-16T08:35:16.226Z"
        }

        mutate(body)
    }



    return (
        <Container>

            {
                isMakingPayment &&
                <GModal
                    open={showModal}
                    handleClose={() => setShowModal(false)}
                >
                    <Modal
                        type={modalType}
                        setShowModal={setShowModal}
                    />
                </GModal>

            }

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
                                <GRadioSelect
                                    value="creditCard"
                                    selected={paymentMethod === "creditCard"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <p>Credit card</p>
                            </div>

                            <div>
                                <Visa />
                                <Mastercard />
                                <AmericanExpress />
                            </div>
                        </SelectItems>



                        {
                            showForm &&
                            <Form>
                                <GTextField
                                    placeholder={"Card number"}
                                    id="cardNumber"
                                    name="cardNumber"
                                    register={register}
                                    error={errors.cardNumber}
                                    errorText={errors.cardNumber && errors.cardNumber.message}
                                    required
                                />
                                <GTextField
                                    placeholder={"Name on card"}
                                    id="name"
                                    name="name"
                                    register={register}
                                    error={errors.name}
                                    errorText={errors.name && errors.name.message}
                                    required

                                />

                                <FormFlex>
                                    <GTextField
                                        placeholder={"Expiration date (MM/YY)"}
                                        id="expireryDate"
                                        name="expireryDate"
                                        register={register}
                                        error={errors.expireryDate}
                                        errorText={errors.expireryDate && errors.expireryDate.message}
                                        required
                                    />
                                    <GTextField
                                        placeholder={"Security code"}
                                        id="securityCode"
                                        name="securityCode"
                                        register={register}
                                        error={errors.securityCode}
                                        errorText={errors.securityCode && errors.securityCode.message}
                                        required
                                    />
                                </FormFlex>
                            </Form>
                        }


                        {/* <Add>
                            <p>+</p>
                            <p>Add a different address</p>
                        </Add> */}

                        <SelectItems>
                            <div>
                                <GRadioSelect
                                    value="yourWallet"
                                    selected={paymentMethod === "yourWallet"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <p>Your Wallet </p>
                            </div>

                            <div>
                                <LogoPayment />
                            </div>

                        </SelectItems>

                        <SelectItems>
                            <div>
                                <GRadioSelect
                                    value="paypal"
                                    selected={paymentMethod === "paypal"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <Paypal />
                            </div>
                        </SelectItems>

                        <SelectItems>
                            <div>
                                <GRadioSelect
                                    value="sofort"
                                    selected={paymentMethod === "sofort"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <Sofort />
                            </div>
                        </SelectItems>

                    </InformationSection>

                    <DetailsContainer>
                        <Flex>
                            <h6>Recipient Details</h6>
                            <Update to={'/account/personal-information'}>Update Details</Update>
                        </Flex>

                        <DetailItem>
                            <p>Contact</p>
                            <p>{phoneNumber}</p>
                        </DetailItem>

                        <DetailItem>
                            <p>Address</p>
                            <p>{`${address?.line1}, ${address?.line2}`}</p>
                            <p>{`${address?.state}, ${address?.postalCode}`}</p>
                            <p>{`${address?.country}`}</p>
                        </DetailItem>

                        {/* <DetailItem>
                            <p>Shipping method</p>
                            <p>DHL Logistics</p>
                        </DetailItem> */}
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
                            and <span><Link>Privacy policy</Link></span>. Global-e is an international
                            fulfilment service provider to John Hardy
                        </p>
                    </Terms>
                    <GButton
                        onClick={onSubmit}
                        isDisabled={!paymentMethod || (paymentMethod === 'creditCard' && (!isValid || !isDirty))}
                        label={"Pay"}
                        isLoading={isPending}
                        width={"50%"}
                    />


                </CheckoutContainer>
                <ItemDetailsContainer>
                    <CardsContainer>
                        {
                            transformData?.map((item, index) =>
                                <CheckoutItemCard
                                    item={item}
                                    key={index}
                                />
                            )
                        }
                    </CardsContainer>

                    <PriceDetailsContainer>
                        <PriceDetails
                            title={"Subtotal"}
                            price={formatAmount(totalPrice)}
                        />
                        <PriceDetails
                            title={"Shipping"}
                            price={formatAmount(shipping)}
                        />

                        <TotalContainer>
                            <Total price={formatAmount(totalPrice + shipping)} />
                        </TotalContainer>
                    </PriceDetailsContainer>
                </ItemDetailsContainer>
            </Body>
            {/* <LineLoader loading={isPending} /> */}
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
    /* height: 100vh;
    overflow-y: auto;  */
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

const Update = styled(Link)`
    color: var(--primary-color);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        font-weight: 600;
    }
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