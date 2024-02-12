import styled from "styled-components"
import { GCheckbox } from "../../../Ui_elements"
export const Pricefilter = () => {
    return (
        <Container>
            <InputContainer>
                <input
                    placeholder="₦ 0.00"
                />
                <p>-</p>
                <input
                    placeholder="₦ 0.00"
                />
                <button>Apply</button>
            </InputContainer>

            <Items>
                <PriceItems>
                    <GCheckbox outline />
                    <p>Under 4,000</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>4,000 - 24,000</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>24,000 - 200,000k</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>200,000 - 10,000,000</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>More than 10,000,000</p>
                </PriceItems>

            </Items>
        </Container>
    )
}

const Container = styled.div`
    width: auto;
`

const InputContainer = styled.div`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    input{
        border: 1px solid var(--gray-200);
        outline: none;
        padding: 8px 15px;
        width: 80px;
    }

    button{
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--primary-color);
        font-size: 0.8rem;
        font-weight: 600;
    }

`

const Items = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`
const PriceItems = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    p{
        font-weight: 500;
    }
`