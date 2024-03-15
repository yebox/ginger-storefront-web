import styled from 'styled-components'
import { useState } from 'react'
import {
    GBreadCrumbs,
    GButton,
    GCheckbox,
    GSelectField,
    GTextField,
} from '../../../Ui_elements'
import { InstaFooter } from '../Components'
import { CheckoutItemCard, PriceDetails, Total } from './components'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CheckoutAddressSchema } from './schema';
import { Controller } from 'react-hook-form';
import { countries, formatAmount } from '../../../Utils';
import { useLocation } from 'react-router-dom';
import { useApiSend } from '../../../Hooks';
import { createOrder } from '../../../Urls';
import { toast } from 'react-hot-toast';
import { SelectCard } from './components';
import { RedRightArrow } from '../../../Assets/Svgs'



const Checkout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectAddress, setSelectAddress] = useState(null)
    const [displayForm, setDisplayForm] = useState(false)
    const params = new URLSearchParams(location.search)
    const transformDataString = params.get('data');
    const totalPriceString = params.get('totalPrice')
    const totalPrice = JSON.parse(decodeURIComponent(totalPriceString))
    const transformData = JSON.parse(decodeURIComponent(transformDataString));
    const shipping = 2000

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(CheckoutAddressSchema)
    })

    const { mutate, isPending } = useApiSend(
        createOrder,
        () => {
            toast.error('Order created successfully')
        },
        () => {
            toast.error(`Something went wrong`)
        }
    )

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


    const {
        address,
        apartment,
        city,
        state,
        country,
        zipCode,
        phoneNumber
    } = watch()

    const onSubmit = (data) => {
        const items = transformData.map((item) =>
            [{
                productId: item?._id,
                quantity: item?.quantity
            }]
        )
        const body = {
            items,
            price: totalPrice,
            deliveryAddress: {
                line1: data?.address,
                line2: data?.apartment,
                city: data?.city,
                state: data?.state,
                country: data?.country.value,
                postalcode: data?.zipCode
            },
            isWholesale: true,
            deliveryDate: "2024-03-14T22:28:19.058Z",
            dateDelivered: "2024-03-14T22:28:19.058Z"
        }
        mutate(body)
    }

    return (
        <Container>
            <BreadContainer>
                <GBreadCrumbs />
            </BreadContainer>
            <Body>
                <CheckoutContainer>
                    <h5>Checkout</h5>
                    <InformationSection onSubmit={handleSubmit(onSubmit)}>
                        <h6>Delivery Information</h6>

                        {data.map((item) => (
                            <SelectCard
                                key={item.id}
                                id={item.id}
                                selectedCard={selectAddress}
                                selectedItem={selectAddress}
                                item={item.item}
                                onClick={() => setSelectAddress(item.id)}
                            />
                        ))}
                        <Add onClick={() => setDisplayForm(!displayForm)}>
                            <p>Add a different address</p>
                            <RedRightArrow />
                        </Add>

                        {
                            displayForm &&

                            <>
                                <GTextField
                                    id="address"
                                    placeholder="Address"
                                    name="address"
                                    register={register}
                                    error={errors.address}
                                    errorText={errors.address && errors.address.message}
                                    required
                                />
                                <GTextField
                                    id="apartment"
                                    placeholder="Apartment/Suite (optional)"
                                    name="apartment"
                                    register={register}
                                    error={errors.apartment}
                                    errorText={errors.apartment && errors.apartment.message}
                                    required
                                />

                                <FormFlex>
                                    <GTextField
                                        id="city"
                                        placeholder="City"
                                        name="city"
                                        register={register}
                                        error={errors.city}
                                        errorText={errors.city && errors.city.message}
                                        required
                                    />
                                    <GTextField
                                        id="state"
                                        placeholder="State"
                                        name="state"
                                        register={register}
                                        error={errors.state}
                                        errorText={errors.state && errors.state.message}
                                        required
                                    />
                                </FormFlex>

                                <Controller
                                    name="country"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <GSelectField
                                            {...field}
                                            placeholder="Select a country"
                                            options={countries}
                                            id="country"
                                            searchable={true}
                                            isError={!!errors.country}
                                            errorText={errors.country && errors.country.message}
                                        />
                                    )}
                                />

                                <GTextField
                                    id="zipCode"
                                    placeholder="Zip code"
                                    name="zipCode"
                                    register={register}
                                    error={errors.zipCode}
                                    errorText={errors.zipCode && errors.zipCode.message}
                                    required
                                />

                                <GTextField
                                    id="phoneNumber"
                                    placeholder="Phone"
                                    name="phoneNumber"
                                    register={register}
                                    error={errors.phoneNumber}
                                    errorText={errors.phoneNumber && errors.phoneNumber.message}
                                    required
                                />

                                <CheckContainer>
                                    <GCheckbox />
                                    <p>Save this information for next time</p>
                                </CheckContainer>

                                <GButton
                                    label={"Continue"}
                                    width={"50%"}
                                    type={'submit'}
                                    isLoading={isPending}
                                    isDisabled={
                                        !address ||
                                        !apartment ||
                                        !city ||
                                        !state ||
                                        !country ||
                                        !zipCode ||
                                        !phoneNumber
                                    }
                                // onClick={() => navigate('/cart/information/address')}
                                />
                            </>
                        }


                    </InformationSection>



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
            <InstaFooter />
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

const Add = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    p{
        font-size: 1rem;
        color: var(--primary-color);
        font-size: 500;
        transition: all 0.3s ease;

        &:hover{
            font-weight: 500;
        }
    }
`