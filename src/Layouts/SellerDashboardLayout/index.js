import styled from "styled-components";
import { SellerNavbar, SellerSidebar } from "./components";

export const SellerDashboardLayout = ({ children }) => {
  return (
    <Container>
      <SellerSidebar />
      <RightContainer>
        <SellerNavbar />
        {children}
      </RightContainer>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  width: 100vw;
  background: #f9f9f9;
`;

const RightContainer = styled.div`
  flex-grow: 1;
  padding: 0 64px 32px 24px;
`;
