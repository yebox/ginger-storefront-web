import styled from "styled-components";
import { Logo } from "../../../../Assets/Svgs";
import { sideBarMenus } from "../../data";
import { MenuItem } from "./components";
import { useLocation } from "react-router-dom";

export const SellerSidebar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Logo />
      <MenuWrapper>
        {sideBarMenus.map((item) => (
          <MenuItem
            key={item?.id}
            item={item}
            active={item?.path === pathname}
          />
        ))}
      </MenuWrapper>
      <Logout>Log out</Logout>
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 84px;
  width: 330px;
  height: 100vh;
  padding: 32px 70px 82px;
  background: #fefefe;

  & > svg {
    width: 168px;
    height: 72px;
    flex-shrink: 0;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const Logout = styled.p`
  color: var(--Ginger-Error, #ce0303);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  margin-top: auto;
  cursor: pointer;
`;
