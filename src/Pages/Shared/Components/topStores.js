import styled from "styled-components"
import { GCheckbox } from "../../../Ui_elements"
export const TopStores = () => {
    return (
        <Container>
            <Items>
                <PriceItems>
                    <GCheckbox outline />
                    <p>OLAPLEX</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>KeraCare</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>L’OREAL</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>Rosalind</p>
                </PriceItems>
                <PriceItems>
                    <GCheckbox outline />
                    <p>Meldiv beauty</p>
                </PriceItems>

            </Items>
        </Container>
    )
}

const Container = styled.div`
    width: auto;
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