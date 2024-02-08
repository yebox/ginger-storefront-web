import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Account, Cart, Dollar, DownArrow, Like,Logo, Search } from '../../../Assets/Svgs'


export const Navbar = () => {
    return (
        <OuterContainer>
            <Container>
                <Links>
                    <Link>About us</Link>
                    <Link>Sell on ginger</Link>
                </Links>

                <LogoContainer>
                    <Logo />
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
                    <Link>All</Link>
                    <Link>Hair</Link>
                    <Link>Nails</Link>
                    <Link>Eyelashes</Link>
                    <Link>Skin and Body</Link>
                    <Link>Equipment</Link>
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