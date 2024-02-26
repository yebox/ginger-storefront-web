import styled from 'styled-components'
import { SuccessPaymentVector, PaymentSuccess } from '../../../../../Assets/Svgs'
import { GButton } from '../../../../../Ui_elements'
export const Confirmed = () => {
    return (
        <Container>
            <SuccessHead>
                <Vector>
                    <SuccessPaymentVector />
                </Vector>

                <Icon>
                    <PaymentSuccess />
                </Icon>
            </SuccessHead>

            <Detail>
                <h5>Documents  Confirmed</h5>
                <p>Your documents has been confirmed successfully and you can now sell on ginger.</p>
            </Detail>

            <Footer>
                <GButton
                    width={"80%"}
                    label={"Continue"}
                />
            </Footer>

        </Container>
    )

}


const Container = styled.div`
    width: 100%;
    height: 437px;
    background-color: white;
    border: 1px solid var(--gray-200);
    padding-bottom: 3rem;
`
const Head = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-yellow);
`
const Vector = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 0;
`
const Icon = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid var(--gray-200);
    z-index: 3;
`

const SuccessHead = styled(Head)`
    background-color: #F6FFF3;
    
`

const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    margin: 2rem 0 46px 0;
    h5 p{
        text-align: center;
    }
    p{
        width: 70%;
        text-align: center;
    }
    h5{
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 12px;
`
