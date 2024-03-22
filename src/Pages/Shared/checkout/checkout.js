import styled from 'styled-components'
import { useState } from 'react'
import {
    GBreadCrumbs,
    GButton,
    GCheckbox,
    GSelectField,
    GTextField,
    LineLoader,
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
import { useApiGet, useApiSend } from '../../../Hooks';
import { createOrder, getUser, updateUserAddress } from '../../../Urls';
import { toast } from 'react-hot-toast';
import { SelectCard } from './components';
import { RedRightArrow } from '../../../Assets/Svgs'
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';



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

    const queryClient = useQueryClient()

    
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(CheckoutAddressSchema)
    })

    const { mutate: updateAddress, isPending: isUpdatingAddress } = useApiSend(
        updateUserAddress,
        () => {
            toast.success('Address book updated')
            queryClient.invalidateQueries(['get-user-data'])
            setDisplayForm(false)
        },
        () => {
            toast.error(`Something went wrong`)
        }
    )

    const { data: userAddress, isLoading: isLoadingUser } = useApiGet(
        ['get-user-data'],
        () => getUser(),
        {
            enabled: true
        }
    )


    const addresses = useMemo(() => {
        const formatAddress = [userAddress?.address]
        return formatAddress
    }, [userAddress])

    console.log(userAddress, "userAddress!!!")

    const {
        address,
        apartment,
        city,
        state,
        country,
        zipCode,
        phoneNumber
    } = watch()

    const handleCardClick = (item) => {
        setSelectAddress(item);
    };

    const onSubmit = (data) => {
        const body = {
            line1: data?.address,
            line2: data?.apartment,
            city: data?.city,
            state: data?.state,
            country: data?.country.value,
            postalCode: data?.zipCode
        }
        updateAddress(body)
    }


    const isAddressIncomplete =
    userAddress?.address &&
        (!address || !apartment || !city || !state || !country || !zipCode || !phoneNumber);
    
        
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
                        {userAddress?.address && addresses?.map((item, index) => (
                            <SelectCard
                                key={index}
                                id={index}
                                selected={selectAddress === item}
                                onChange={() => handleCardClick(item)}
                                onClick={() => handleCardClick(item)}
                                item={{
                                    item,
                                    userName: `${userAddress?.firstName} ${userAddress?.lastName}`,
                                }}
                            />
                        ))}
                        <Add onClick={() => setDisplayForm(!displayForm)}>
                            {
                                userAddress?.address ?
                                    <p>Add a different address</p>
                                    :
                                    <p>Add an address</p>
                            }

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

                                {/* <GTextField
                                    id="phoneNumber"
                                    placeholder="Phone"
                                    name="phoneNumber"
                                    register={register}
                                    error={errors.phoneNumber}
                                    errorText={errors.phoneNumber && errors.phoneNumber.message}
                                    required
                                /> */}

                                <CheckContainer>
                                    <GCheckbox isTransparent />
                                    <p>Save this information for next time</p>
                                </CheckContainer>

                                {/* <GButton
                                    label={"Continue"}
                                    width={"50%"}
                                    type={'submit'}
                                isLoading={isUpdatingAddress}
                                isDisabled={isAddressIncomplete || isValid}
                                /> */}
                            </>
                        }

                        {
                            // !displayForm &&
                            <GButton
                                label={"Continue"}
                                width={"50%"}
                                type={'submit'}
                                onClick={() => navigate(`/cart/information/payment?data=${encodeURIComponent(JSON.stringify(transformData))}&totalPrice=${totalPrice.toString()}&address=${encodeURIComponent(JSON.stringify(selectAddress))}&mobileNumber=${encodeURIComponent(JSON.stringify(userAddress?.phoneNumber))}`)}
                                
                            />
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
            <LineLoader
                loading={
                    isUpdatingAddress ||
                    isLoadingUser
                }
            />
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