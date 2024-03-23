import styled from "styled-components";
import { NotificationIcon, Search } from "../../../Assets/Svgs";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";

export const SellerNavbar = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const formatttedPath = path.split("_").join(" ");
  console.log({ formatttedPath });
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
          <NotificationIcon />
          <p>Notification</p>
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
  padding: 2% 0;
  margin: 42px 0 40px;
`;

const Title = styled.h1`
  color: var(--Black-500, #151515);
  font-family: Barlow;
  font-size: 34px;
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
  border-left: 1px solid var(--gray-300);
  padding-left: 1rem;
  gap: 0.5rem;
  height: 48px;
`;

const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
`;
