import styled from "styled-components"
import { GuideCheck } from "../../../Assets/Svgs"
export const GuideCard = () => {
    return (
        <Container>
            <div>
                <GuideCheck />
            </div>

            <div>
                <b>Bring your ideas to life</b>
                <p>
                    From pixel-perfect icons and scalable vector graphics,
                    to full user flows and interactive prototypes, Sketch is
                    the perfect place to design, create and test.
                </p>
            </div>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap:20px;
    width: 16rem;

    div{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    b{
        font-size: 1.1rem;
        font-weight: 500;
    }
    p{
        font-size: 0.8rem;
        color: var(--gray-400);
    }
`
