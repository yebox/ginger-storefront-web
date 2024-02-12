import styled from "styled-components"

export const BlogCard = () => {
    return (
        <Container>
            <div>
                <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <Author>Nail Art • 16 Jan 2024</Author>
            <Title>6 ways to create long lasting excitement for clients with nail art </Title>
        </Container>
    )
}

const Container = styled.div`
    width: 18.5rem;
    div{
        background-color: aliceblue;
    }

    img{
        width: 100%;
        height: 19rem;
        object-fit: cover;
    }
    
`

const Author = styled.p`
    color: var(--gray-300);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 2rem;
    margin-top: 1.8rem;
`

const Title = styled.p`
    font-weight: 400;
    font-size: 1.1rem;
`