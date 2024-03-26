import { styled } from "styled-components";
import { Footer } from "./Components/footer";
import { Navbar } from "./Components/navbar";

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </div>
  );
};

const ChildrenWrapper = styled.div`
  margin-top: 83px;
`;
