import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { Account, Cart, Dollar, DownArrow, Like, Logo, Search } from '../../../Assets/Svgs'


export const Navbar = () => {
    return (
        <OuterContainer>
            <Container>
                <Links>
                    <NavLink to={'/about-us'}>About us</NavLink>
                    <NavLink to={"/sell-on-ginger"}>Sell on ginger</NavLink>
                </Links>

                <LogoContainer>
                    <NavLink to={'/'}>
                        <Logo />
                    </NavLink>
                </LogoContainer>

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

                    <Icons>
                        <Like />
                        <Search />
                        <Dollar />
                        <DownArrow />
                    </Icons>

                </Utility>
            </Container>
            <LowerNav>
                <div>
                    <NavLink to={'all-products'}>All</NavLink>
                    <NavLink to={'hair'}>Hair</NavLink>
                    <NavLink to={'nails'}>Nails</NavLink>
                    <NavLink to={'eyelashes'}>Eyelashes</NavLink>
                    <NavLink to={'skin'}>Skin and Body</NavLink>
                    <NavLink to={'equipment'}>Equipment</NavLink>
                </div>
            </LowerNav>

        </OuterContainer>

    )
}


const OuterContainer = styled.nav`
    width: 100%;

`
const Container = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-self: flex-start;
`

const Utility = styled.div`
    display: flex;
    align-items: center;
    gap:1.5rem;
    justify-self: flex-end;
    float: right;
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
    height: 5vh;
    padding-left:1.2rem;
    border-left: 1px solid var(--gray-300);
`

const LowerNav = styled.div`
    width: 100%;
    background-color: var(--lower-nav);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        transition: all 0.3s ease;
        &:hover{
            color: var(--primary);
        }
    }
    div{
        display: flex;
        align-items: center;
        gap:2rem;
    }
`
const LogoContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`