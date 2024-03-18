import styled from 'styled-components'
import { DollarShield } from '../../Assets/Svgs'
import { IMAGE_BASE_URL } from '../../Utils'
import { useNavigate } from 'react-router-dom'

export const ItemCard = ({ item, setShowSearch }) => {
    console.log(item, "I am item")
    const navigate = useNavigate()
    return (
        <Container
            onClick={() => {
                navigate(`/categories/${item?.category?.name}/${item?._id}`)
                setShowSearch(false)
            }}
        >
            <img src={`${IMAGE_BASE_URL}${item?.mainImage}`} />
            <OtherDetails>
                <Name>{item?.name}</Name>
                <Price>₦{item?.price}</Price>
                <ExtraDetails>
                    <RRPContainer>
                        <ShieldContainer>
                            {/* <DollarShield /> */}
                            <p>MSRP:</p>
                        </ShieldContainer>
                        <MSRP>₦{item?.msrp}</MSRP>
                    </RRPContainer>

                    <RRPContainer>
                        {item?.brand?.name}
                    </RRPContainer>
                </ExtraDetails>
            </OtherDetails>
        </Container>
    )
}

const ExtraDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`
const Container = styled.div`
    border-bottom: 1px solid var(--gray-200);
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 15px;
    cursor: pointer;
    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        background-color: azure;
    }
    transition: all 0.3s ease;

    &:hover{
        background-color: var(--gray-100);
    }
`
const Name = styled.p`
    font-size: 1.4rem;
    margin-bottom: 10px !important;
`
const Price = styled.p`
    font-size: 1.4rem;
    margin-bottom: 10px !important;
`
const MSRP = styled.p`
    font-size: 0.8rem;
    margin-bottom: 0 !important;
`
const RRPContainer = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: flex-start;
  gap: 1rem;
  margin: 0.6rem 0;
  width: fit-content;
  background-color: var(--gray-200);
  padding: 2px 5px !important;
`;

const OtherDetails = styled.div`
    width: 100%;
`
const ShieldContainer = styled.div`
    display: flex;
    align-items: center !important;
    gap: 10px;
    p{
        font-size: 0.8rem;
        margin-bottom: 0 !important;
    }

    svg {
      width: 12px;
      height: 14px;
    }
`