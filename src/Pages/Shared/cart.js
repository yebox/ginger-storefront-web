import styled from 'styled-components'
import { useState, useMemo, useEffect } from 'react';
import { EmptyCartIcon, InfoIcon } from '../../Assets/Svgs';
import { GBreadCrumbs, GButton, GTable, GTooltip, LineLoader } from '../../Ui_elements';
import { InstaFooter } from './Components';
import { indexOf } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useApiGet, useApiSend } from '../../Hooks';
import { getCartItems, removeCartItem, removeAllCartItem } from '../../Urls';
import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL } from '../../Utils';
import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';





export default function Cart() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const [totalPrice, setTotalPrice] = useState(0);
    const [item, setItem] = useState(null)
    const queryClient = new QueryClient()

    const { data: cartItems, isLoading } = useApiGet(
        ['get-cart-items'],
        () => getCartItems(user?._id),
        {
            enabled: true,
        }
    )


    const { mutate: removeFromCart, isPending: isRemovingFromCart, } = useApiSend(
        () => removeCartItem(item?._id, item?.quantity),
        () => {
            toast.success('Removed from cart')
            queryClient.invalidateQueries(['cart-data'])
        },
        (e) => {
            toast.error('Could not remove from cart')
        }
    )

    const handleRemoveSingleItem = (row) => {
        setItem(row)
        removeFromCart()
    }

    const transformData = useMemo(() => {
        if (!cartItems) return [];

        return cartItems?.items?.map(cartItem => ({
            _id: cartItem.productId,
            image: cartItem.product.mainImage,
            brandName: cartItem.product.brand.name,
            product: cartItem.product.name,
            price: `₦${cartItem.product.price}`,
            quantity: cartItem.quantity,
            total: `₦${cartItem.product.price * cartItem.quantity}`,
            remove: '',
        }));
    }, [cartItems?.items]);


    useEffect(() => {
        let totalPriceCalculation = 0;
        if (transformData) {
            transformData.forEach(item => {
                const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
                totalPriceCalculation += price * item.quantity;
            });
            console.log(totalPriceCalculation, "priceaa");
            setTotalPrice(totalPriceCalculation);
        }
    }, [transformData]);






    const columns = useMemo(
        () => [
            {
                Header: 'Image',
                accessor: 'image',
                Cell: ({ row }) => {
                    console.log(row, "image row")
                    return (
                        <img
                            style={{ width: '142px', height: '142px', borderRadius: '8px', objectFit: "cover" }}
                            src={`${IMAGE_BASE_URL}${row?.image}`}
                        />
                    )
                }
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
                Cell: ({ row }) => {
                    return (

                        <SpendContainer>
                            <GButton
                                label={"Shop brand"}
                                outline
                                onClick={() => navigate(`/shop/${row.brandName}`)}
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
                        onClick={handleRemoveSingleItem}
                    >
                        Remove
                    </Remove>
                )
            }
        ],
        [transformData]
    );



    const totalData = [
        {
            description: `Subtotal (${transformData.length} items)`,
            price: totalPrice.toString()
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

            {transformData.length > 0 ? (
                <Container>

                    <GTable
                        columns={columns}
                        data={transformData}
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
            ) : (
                <NoItemContainer>
                    <IconHolder>
                        <EmptyCartIcon />
                    </IconHolder>

                    <b>You have no item in cart</b>

                    <EmptyButtonHolder>
                        <GButton
                            onClick={'/categories/all'}
                            label={"Continue shopping"}
                        />
                    </EmptyButtonHolder>
                    <InstaFooter />
                </NoItemContainer>
            )}
            <LineLoader loading={
                isLoading ||
                isRemovingFromCart
            }
            />
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