import styled from 'styled-components'
import { SellerWalletIcon } from '../../../../../Assets/Svgs'

export const DashboardCard = ({item}) => {
    return (
        <Container>
            <Header>
                {item.icon}
                <Details>
                    <Title>{item.title} </Title>
                    <Count>{item.count}</Count>
                </Details>
            </Header>


        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    border-right: 1px solid var(--hover-color);
    display: flex;
    justify-content: center;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
`

const Title = styled.p`
    font-size: 16px;
    font-weight: 300;
`

const Count = styled.h5`
    font-family: Barlow;
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
    width: 100%;
`

const Details = styled.div`
    width: 100%;
`