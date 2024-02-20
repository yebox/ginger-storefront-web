import styled from 'styled-components'
import { MinimumSpendIcon } from '../../../../Assets/Svgs'
import { GButton } from '../../../../Ui_elements'

export const MinimumSpendBanner = () => {
    return (
        <Container>
            <div>
                <div>
                    <MinimumSpendIcon />
                    <div>
                        <h6>KeraCare Minimum Spend: <span>₦15,0000</span></h6>
                        <p>KeraCare has set a minimum spend of Fifteen Thousand Naira on their store.
                            Please ensure all purchase are Fifteen Thousand Naira or above to checkout
                            any item on this store.
                        </p>
                    </div>
                </div>
                <GButton
                    alternateOutline
                    label={"Learn more ↑"}
                    width={180}
                />
            </div>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    padding: 50px 3rem;
    border-radius: 2px;
    background-color: var(--black);
    h6,p{
        color: white;
    }
    h6{
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
    }
    span{
        color: #FAA426;
    }
    p{
        width: 60%;
    }
    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        >div{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`