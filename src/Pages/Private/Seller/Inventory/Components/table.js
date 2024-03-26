import styled from 'styled-components'
import { useMemo } from 'react';
import { SellerTable } from '../../Components';
import { formatAmount } from '../../../../../Utils';
import { ThreeDotMenuIcon } from '../../../../../Assets/Svgs';
import { PopMenu } from '../../../../../Ui_elements';

export const InventoryTable = () => {


    const menuItems = [
        {
            item: "View details",
            action: () => { },
        },
        {
            item: "Mark as out of stock",
            action: () => { },
        },
        {
            item: () => <Delete>Delete Item</Delete>,
            action: () => { },
        }
    ];

    const data = [
        {
            item: {
                image: "https://plus.unsplash.com/premium_photo-1669234310386-4eab25e036a0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                details: "Clairol BW2 Tub Powder Lightener Extra-Strength"
            },
            skuNo: "RTF-5655L",
            amount: {
                amount: "₦ 12000",
                discount: "₦ 25000"
            },
            brand: "RSD OIL",
            category: "Beauty & Skin",
            inStock: true
        },
        {
            item: {
                image: "https://plus.unsplash.com/premium_photo-1669234310386-4eab25e036a0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                details: "Clairol BW2 Tub Powder Lightener Extra-Strength"
            },
            skuNo: "RTF-5655L",
            amount: {
                amount: "₦ 12000",
                discount: "₦ 25000"
            },
            brand: "RSD OIL",
            category: "Beauty & Skin",
            inStock: false
        }
    ]

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "item",
                Cell: ({ row }) => (
                    <Item>
                        <img src={row.item.image} />
                        <p>{row.item.details}</p>
                    </Item>
                ),
                width: "400px"
            },
            {
                Header: "SKU No.",
                accessor: "skuNo",
            },
            {
                Header: "Amount",
                accessor: "amount",
                Cell: ({ row }) => (
                    <div>
                        <Amount>{formatAmount(row.amount.amount)}</Amount>
                        <Discount>{formatAmount(row.amount.discount)}</Discount>
                    </div>
                )

            },
            {
                Header: "Brand",
                accessor: "brand"
            },
            {
                Header: "Categories",
                accessor: "category",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ row }) => (
                    <>
                        {row.inStock ? <InStock>In stock</InStock> : <OutStock>Out of stock</OutStock>}
                    </>


                ),
                width: "100px"
            },

            {
                Header: "",
                accessor: "",
                Cell: ({ row }) => (
                    <PopMenu menuItems={menuItems}>
                        <Menu>
                            <ThreeDotMenuIcon />
                        </Menu>
                    </PopMenu>

                ),
                width: "10px"
            },

        ],
        []
    );


    return (
        <Container>
            <SellerTable
                data={data}
                columns={columns}
            />
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 60vh;
`

const Item = styled.div`
    display: flex;
    align-items: flex-start;
    gap:20px ;
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    /* p {
        font-size: 1rem;
        color: black;
    }*/
`;

const Amount = styled.p`

`

const Discount = styled.p`
    font-size: 12px;
    color:var(--gray-300);
    text-decoration: line-through;
`

const InStock = styled.p`
    font-weight: 400;
    color: #3AC808;
`
const OutStock = styled.p`
    font-weight: 400;
    color: var(--primary-color);
`

const Menu = styled.div`
    cursor: pointer;
`

const Delete = styled.p`
    color: var(--primary-color);
`