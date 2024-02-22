import styled from 'styled-components'
import {
    DocumentIcon,
    PaymentProcessingVector,
} from '../../../../../Assets/Svgs'
import { Spinner } from "../../../../../Ui_elements"
export const Processing = () => {

    return (
        <Container>
            <Head>
                <Vector>
                    <PaymentProcessingVector />
                </Vector>

                <Icon>
                    <DocumentIcon />
                </Icon>
            </Head>

            <Detail>
                <h5>Your document is being reviewed</h5>
                <p>Just a few seconds, our team is verifying the legitimacy of your documents.</p>
            </Detail>

            <Footer>
                <Spinner
                    width={30}
                    height={30}
                />
                <p>Processing</p>
            </Footer>

        </Container>
    )

}


const Container = styled.div`
    width: 100%;
    height: 437px;
    background-color: white;
    border: 1px solid var(--gray-200);
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
    padding-left: 20px;
    border: 1px solid var(--gray-200);
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
