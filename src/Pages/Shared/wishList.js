import styled from 'styled-components'
import { useState } from 'react';
import { NoWishList } from '../../Assets/Svgs';
import { GBreadCrumbs, GButton, GSpacer, Product } from '../../Ui_elements';
import { InstaFooter } from './Components';



export default function Wishlist() {
    const [noItem, setNoItem] = useState(true);

    return (
        <>
            <BreadCrumbHolder>
                <GBreadCrumbs />
            </BreadCrumbHolder>

            {noItem ? (

                <NoItemContainer>
                    <IconHolder>
                        <NoWishList />
                    </IconHolder>

                    <b>You have no saved item</b>

                    <EmptyButtonHolder>
                        <GButton
                            onClick={() => setNoItem(false)}
                            label={"Continue shopping"}
                        />
                    </EmptyButtonHolder>
                    <InstaFooter />
                </NoItemContainer>
            ) : (
                <Container>
                    <Header>
                        <div>
                            <p>Saved items</p>
                            <div>
                                3
                            </div>
                        </div>

                        <div>
                            <p>Clear all</p>
                            <p>&times;</p>
                        </div>

                    </Header>

                    <CardContainer>
                        <Product />
                        <Product />
                        <Product />

                    </CardContainer>
                    <GSpacer size={"200"} />
                    <InstaFooter />
                </Container>
            )}
        </>
    );
}



const Container = styled.main`

`

const Header = styled.section`
    padding: 0 5%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--gray-200);

    >div:nth-child(1){
        display: flex;
        align-items: center;
        gap: 20px;
        

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--black);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    >div:nth-child(2){
        display: flex;
        align-items: center;
        gap: 20px;
        p{
            color: var(--primary-color);
        }
        p:nth-child(2){
            font-size: 3rem;
        }
    }
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

const BreadCrumbHolder = styled.div`
    padding: 5%;
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

const CardContainer = styled.section`
    padding: 0 5%;
    width:100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    gap: 20px;
`