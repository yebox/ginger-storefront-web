import styled from 'styled-components'
import { useState, useMemo } from 'react';
import { EmptyCartIcon, InfoIcon } from '../../Assets/Svgs';
import { GBreadCrumbs, GButton, GTable, GTooltip } from '../../Ui_elements';
import { InstaFooter } from './Components';
import { indexOf } from 'lodash';
import { useNavigate } from 'react-router-dom';




export default function Cart() {
    const [noItem, setNoItem] = useState(true);
    const navigate = useNavigate()

    const data = useMemo(() => [
        {
            image: "",
            product: "Clairol BW2 Tub Powder Lightener Extra-Strength",
            price: "₦4,500",
            quantity: 5,
            total: "₦4,500",
            remove: ""
        },
        {
            image: "",
            product: "Clairol BW2 Tub Powder Lightener Extra-Strength",
            price: "₦4,500",
            quantity: 5,
            total: "₦4,500",
            remove: ""
        },
        {
            image: "",
            product: "Clairol BW2 Tub Powder Lightener Extra-Strength",
            price: "₦4,500",
            quantity: 5,
            total: "₦4,500",
            remove: ""
        },
        {
            image: "",
            product: "Clairol BW2 Tub Powder Lightener Extra-Strength",
            price: "₦4,500",
            quantity: 5,
            total: "₦4,500",
            remove: ""
        },
    ], []);
    const columns = useMemo(
        () => [
            {
                Header: 'Image',
                accessor: 'image',
                Cell: ({ row }) => (
                    <img
                        style={{ width: '142px', height: '142px', borderRadius: '8px' }}
                        src='https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=3279&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                )
            },
            {
                Header: 'Product',
                accessor: 'product'
            },
            {
                Header: 'Price',
                accessor: 'price',
                Cell: ({ row }) => {

                    return (
                        <PriceContainer>
                            <DiscountContainer>
                                <DiscountTag>
                                    <p>20% 	&uarr;</p>
                                </DiscountTag>
                                <Slash>₦6500</Slash>
                            </DiscountContainer>
                            <p>{row.price}</p>
                        </PriceContainer>
                    )
                }

            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
                Cell: ({ row }) => {
                    const [quantity, setQuantity] = useState(row.quantity)
                    return (
                        <QuantityContainer>
                            <PriceButton
                                onClick={() => setQuantity(quantity - 1)}
                            >
                                -
                            </PriceButton>
                            <p>{quantity}</p>
                            <PriceButton
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </PriceButton>
                        </QuantityContainer>
                    )
                }
            },
            {
                Header: () => <SpendHeader>
                    <p>Minimum spend</p>
                    <GTooltip
                        info={"The minimum amount you can spend from that particular brand."}
                    >
                        <InfoIcon />
                    </GTooltip>

                </SpendHeader>,
                accessor: 'total',
                Cell: () => {
                    return (

                        <SpendContainer>
                            <GButton
                                label={"Shop brand"}
                                outline
                            />
                            <Minimumspend>Minimum spend : ₦50,000</Minimumspend>
                            <SpendLeft>₦45,500 left</SpendLeft>
                        </SpendContainer>



                    )
                }
            },
            {
                Header: 'Remove',
                accessor: 'remove',
                Cell: ({ row }) => (

                    <Remove
                        onClick={() => data.slice(indexOf(row), 1)}
                    >Remove</Remove>
                )
            }
        ],
        [data]
    );



    const totalData = [
        {
            description: "Subtotal (2 items)",
            price: "₦4,500"
        },
        {
            description: "Shipping and Tax Calculated at checkout",
            price: ""
        },

    ]


    const cartTotalColumns = useMemo(
        () => [
            {
                Header: 'Cart total',
                accessor: 'description',
                Cell: ({ row }) => (

                    <TotalDescriptionItem>
                        {row.description}
                    </TotalDescriptionItem>
                )
            },
            {
                Header: '',
                accessor: 'price',
                Cell: ({ row }) => (
                    <TotalPriceItem>
                        {row.price}
                    </TotalPriceItem>
                )
            },

        ],
        []
    );




    return (
        <>
            <BreadCrumbHolder>
                <GBreadCrumbs />
            </BreadCrumbHolder>

            {noItem ? (

                <NoItemContainer>
                    <IconHolder>
                        <EmptyCartIcon />
                    </IconHolder>

                    <b>You have no item in cart</b>

                    <EmptyButtonHolder>
                        <GButton
                            onClick={() => setNoItem(false)}
                            label={"Continue shopping"}
                        />
                    </EmptyButtonHolder>
                    <InstaFooter />
                </NoItemContainer>
            ) : (
                <Container>

                    <GTable
                        columns={columns}
                        data={data}
                    />

                    <AlignContainer>
                        <TotalContainer>
                            <GTable
                                totalTable
                                tableWidth={"40vw"}
                                cartTotal
                                columns={cartTotalColumns}
                                data={totalData}
                            />

                            <ButtonContainer>
                                <GButton
                                    onClick={() => navigate('/cart/information')}
                                    label={"Checkout now"}
                                    width={"372px"}
                                />
                                <GButton
                                    label={"Continue shopping"}
                                    outline
                                    width={"278px"}
                                />
                            </ButtonContainer>
                        </TotalContainer>
                    </AlignContainer>



                </Container>
            )}
        </>
    );
}



const Container = styled.main`
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const AlignContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end !important;
`

const NoItemContainer = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

`
const IconHolder = styled.div`
    width: 7.8rem;
    height: 7.8rem;
    border-radius: 50%;
    border: 1px solid var(--gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
`

const EmptyButtonHolder = styled.div`
    width: 20%;
    margin: 0 auto;
    margin-bottom: 130px;
`
const BreadCrumbHolder = styled.div`
    padding: 5%;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap:10px;
    width: 100%;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    width: 100%;
`

const PriceButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: transparent;
    outline: none;
    border: 1px solid var(--gray-200);
    cursor: pointer;
`
const Remove = styled.p`
    color: var(--primary-color);
    text-decoration: underline;
    cursor: pointer;
`

const TotalPriceItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 28px;
    font-weight: 500;
`
const TotalDescriptionItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:2rem;

`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Slash = styled.p`
    text-decoration: line-through;
    color: var(--gray-250);
`

const DiscountTag = styled.div`
    background-color: #DEFFD2;
    border-radius: 6px;
    padding: 1px 4px;
    p{
        color: #3AC808;
        font-size: 10px;
        font-weight: 500;
    }
`

const DiscountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const SpendHeader = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`

const Minimumspend = styled.p`
    font-size: 12px;
    color: var(--primary-color);
`

const SpendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const SpendLeft = styled.p`
    font-size: 10px;
    color: var(--gray-300);
`