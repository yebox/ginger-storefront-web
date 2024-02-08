import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Account, Cart, Dollar, DownArrow, Like, Logo, Search } from '../../../Assets/Svgs'


export const Navbar = () => {
    return (
        <Container>
            <Links>
                <Link>About us</Link>
                <Link>Sell on ginger</Link>
            </Links>

            <div>
                <Logo />
            </div>

            <Utility>
                <>
                    <Flex>
                        <Account />
                        <Link>Account</Link>
                    </Flex>
                    <Flex>
                        <Cart />
                        <Link>Account</Link>
                    </Flex>
                </>

                <div>

                </div>

                <Icons>
                    <Like />
                    <Search />
                    <Dollar />
                    <DownArrow/>
                </Icons>

            </Utility>
        </Container>
    )
}


const Container = styled.nav`
    width: 100%;
    padding: 1.5rem  5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

const Utility = styled.div`
    display: flex;
    align-items: center;
    gap:1.5rem;
`
// const AccountCart = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1.5rem;
// `

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;

`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`