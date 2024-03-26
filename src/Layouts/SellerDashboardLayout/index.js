import styled from "styled-components";
import { SellerNavbar, SellerSidebar } from "./components";

export const SellerDashboardLayout = ({ children }) => {
  return (
    <Container>
      <SellerSidebar />
      <RightContainer>
        <SellerNavbar />
        <ChildrenWrapper>{children}</ChildrenWrapper>
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
  padding: 0 64px 0px 24px;
`;

const ChildrenWrapper = styled.div`
  height: calc(100vh - 125px);
  overflow-y: scroll;
  padding: 30px 0;
`;
