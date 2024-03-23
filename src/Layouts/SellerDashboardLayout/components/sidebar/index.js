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
      <MenuItem item={`Log out`} />
    </Container>
  );
};

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 330px;
  height: 100vh;
  padding: 54px 70px;
  background: #fefefe;

  & > svg {
    width: 168px;
    height: 72px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
