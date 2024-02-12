import styled from 'styled-components'

export const TestimonialCard = () => {
    return (
        <Container>
            <b>&quot;</b>
            <p>
                From pixel-perfect icons and scalable vector graphics,
                to full user flows and interactive prototypes,
                Sketch is the perfect place to design, create and test.
            </p>

            <User>
                <img src='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <div>
                    <h5>Mel Store</h5>
                    <p>Mel Store</p>
                </div>
            </User>
        </Container>
    )
}


const Container = styled.div`
    width: 14rem;
    b{
        font-size: 5rem;
        color: var(--primary-color);
        /* font-weight: "Roboto"; */
    }
    p {
    font-size: 0.8rem;
    color: var(--gray-400);
    margin-bottom: 1rem;
    text-align: justify;
}
`

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

   > div{
        margin-top: 1rem;
    }
    h5{
        font-size: 1.4rem;
        font-weight: 700;
    }
    img{
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        object-fit: cover;
    }
`