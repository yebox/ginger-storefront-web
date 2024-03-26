import styled from "styled-components";

export const BlogCard = ({ width }) => {
  return (
    <Container $width={width}>
      <div>
        <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <Author>Nail Art • 16 Jan 2024</Author>
      <Title>
        6 ways to create long lasting excitement for clients with nail art{" "}
      </Title>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ $width }) => ($width ? $width : "auto")};
  cursor: pointer;
  div {
    background-color: aliceblue;
  }

  img {
    width: 100%;
    height: 248px;
    object-fit: cover;
  }
`;

const Author = styled.p`
  color: var(--gray-250);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 14px 0 18px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
`;
