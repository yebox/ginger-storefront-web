import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuItem = ({
    item
}) => {
    return (
        <Container to={item.route}>
            {item.title}
        </Container>
    )
}


const Container = styled(NavLink)`

`