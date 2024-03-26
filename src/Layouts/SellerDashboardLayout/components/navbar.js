import styled from "styled-components";
import { ChatIcon, Search } from "../../../Assets/Svgs";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";

export const SellerNavbar = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const formatttedPath = path.split("_").join(" ");
  return (
    <Container>
      <Title>{formatttedPath}</Title>
      <RightSide>
        <AvatarSearch>
          <Search />
          <AvatarContainer>
            <Avatar
              sx={{
                bgcolor: "var(--primary-color)",
                width: `24px`,
                height: `24px`,
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            />
            <p>Oluwagbemisola</p>
          </AvatarContainer>
        </AvatarSearch>

        <NotificationContainer>
          <ChatIcon />
          <p>Notification</p>
          <Count>10</Count>
        </NotificationContainer>
      </RightSide>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 20px;
  margin: 16px 0 10px;
  border-bottom: 1px solid #e8e8e8;
`;

const Title = styled.h1`
  color: var(--Black-500, #151515);
  font-family: Barlow;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 40.8px */
  text-transform: capitalize;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

const AvatarSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #e8e8e8;
  padding-left: 1rem;
  gap: 0.5rem;
  height: 48px;
`;

const NotificationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Count = styled.span`
  display: flex;
  padding: 2px 3px;
  justify-content: center;
  align-items: center;
  gap: 1px;
  position: absolute;
  top: -7px;
  left: 11px;
  border-radius: 29px;
  background: var(--Primary-500, #ff4623);
  color: var(--White, #fefefe);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 9.6px */
  flex-shrink: 0;
`;
