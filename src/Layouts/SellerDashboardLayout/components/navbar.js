import styled from 'styled-components'
import { NotificationIcon, Search } from '../../../Assets/Svgs'
import Avatar from '@mui/material/Avatar';


export const SellerNavbar = () => {
    return (
        <Container>
            <div>
                <Title>Dashboard</Title>
            </div>

            <RightSide>
                <AvatarSearch>
                    <Search />
                    <AvatarContainer>
                        <Avatar
                            sx={{ bgcolor: "var(--primary-color)" }}
                            alt="Remy Sharp"
                            src="/broken-image.jpg"
                        />
                        <p>Oluwagbemisola</p>
                    </AvatarContainer>
                </AvatarSearch>

                <NotificationContainer>
                    <NotificationIcon />
                    <p>Notification</p>
                </NotificationContainer>

            </RightSide>

        </Container>
    )
}


const Container = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;
`

const Title = styled.h1`
    font-family: Barlow;
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 500;
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;

`

const AvatarSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    border-left: 1px solid var(--gray-300);
    padding-left: 1rem;
    gap: 0.5rem;
`

const NotificationContainer = styled.div`
    display: flex;
    align-items: center;
`