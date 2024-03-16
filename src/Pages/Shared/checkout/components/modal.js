import styled from 'styled-components'
import {
    ErrorPaymentVector,
    PaymentProcessing,
    PaymentProcessingVector,
    PaymentSuccess,
    SuccessPaymentVector,
    PaymentError
} from '../../../../Assets/Svgs'
import { Spinner, GButton } from "../../../../Ui_elements"


export const Modal = ({ type }) => {
    switch (type) {
        case 'processing':
            return (
                <Container>
                    <Head>
                        <Vector>
                            <PaymentProcessingVector />
                        </Vector>

                        <Icon>
                            <PaymentProcessing />
                        </Icon>
                    </Head>

                    <Detail>
                        <h5>Processing payment</h5>
                        <p>Please wait while your payment is being processed.</p>
                    </Detail>

                    <Footer>
                        <Spinner
                            width={30}
                            height={30}
                        />
                        <p>Processing</p>
                    </Footer>
                </Container>
            );
        case 'confirmed':
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
                        <h5>Processing Confirmed</h5>
                        <p>Your payment has been recorded successfully.</p>
                    </Detail>

                    <Footer>
                        <GButton
                            width={"372px"}
                            label={"Continue"}
                        />
                    </Footer>
                </Container>
            );
        case 'failed':
            return (
                <Container>
                    <FailedHead>
                        <Vector>
                            <ErrorPaymentVector />
                        </Vector>

                        <Icon>
                            <PaymentError />
                        </Icon>
                    </FailedHead>

                    <Detail>
                        <h5>Processing Failed</h5>
                        <p>Sorry! we came across an issue with your payment.</p>
                    </Detail>

                    <Footer>
                        <GButton
                            width={"372px"}
                            label={"Continue"}
                        />
                    </Footer>
                </Container>
            );
        default:
            return (<Container>
                <Head>
                    <Vector>
                        <PaymentProcessingVector />
                    </Vector>

                    <Icon>
                        <PaymentProcessing />
                    </Icon>
                </Head>

                <Detail>
                    <h5>Processing payment</h5>
                    <p>Please wait while your payment is being processed.</p>
                </Detail>

                <Footer>
                    <Spinner
                        width={30}
                        height={30}
                    />
                    <p>Processing</p>
                </Footer>
            </Container>)
    }
}


const Container = styled.div`
    width: 600px;
    height: 437px;
    background-color: white;
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
    background-color: red;
    position: relative;
    z-index: 3;
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

const SuccessHead = styled(Head)`
    background-color: #F6FFF3;

`
const FailedHead = styled(Head)`
    background-color: #FFF6F7;
`