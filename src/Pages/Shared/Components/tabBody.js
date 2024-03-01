import { styled } from "styled-components";

export const TabBody = ({ index, value, children }) => {
  return (
    <Container hidden={value !== index}>
      {value === index && children}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;
