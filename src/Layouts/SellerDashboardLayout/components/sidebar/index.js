import styled from 'styled-components'
import { Logo } from '../../../../Assets/Svgs'
import { sideBarMenus } from '../../data'
import {MenuItem} from "./components"

export const SellerSidebar = () => {
    return (
        <Container>
            <div>
                <Logo/>
            </div>

            {
                sideBarMenus.map((item) =>
                    <MenuItem
                        key={item.id}
                        item={item}
                    />
                )
            }

        </Container>
    )
}

const Container = styled.aside`
    max-width: 330px;
    width: 100%;

`