import styled from 'styled-components'
import { useState } from 'react'
export const Accordion = ({title}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <div>
                <h6>{title}</h6>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <p>{isOpen ? "-" : "+"}</p>
                </div>
            </div>

            <DetailsContainer
                isOpen={isOpen}
            >
                <Detail>
                    From pixel-perfect icons and scalable vector graphics,
                    to full user flows and interactive prototypes, Sketch is
                    the perfect place to design, create and test.

                    From pixel-perfect icons and scalable vector graphics,
                    to full user flows and interactive prototypes, Sketch is
                    the perfect place to design, create and test.
                </Detail>
            </DetailsContainer>

        </Container>
    )
}

const Container = styled.div`
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 1rem;
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h6{
            font-size: 1.8rem;
            font-family: 500;
        }

        div{
            display: flex;
            width: 3rem;
            height: 3rem;
            padding: 4px;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--gray-200);
            cursor: pointer;
            p{
                font-size: 2rem;
                text-align: center;
            }
        }
    }
`

const Detail = styled.p`
    color: var(--gray-400);
`

const DetailsContainer = styled.div`
    max-height: ${({ isOpen }) => isOpen ? "1000px" : !isOpen ? "0" : "0"};
    overflow: hidden;
    transition: all 0.5s ease;
    margin-top: 1rem;
`