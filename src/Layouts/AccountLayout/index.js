import React from "react";
import { styled } from "styled-components";
import { accountNavInfo } from "../../Pages/Shared/Account/data";
import { Link, useLocation } from "react-router-dom";
import {
  AccountLeftStar,
  AccountRightStar,
  WalletIcon,
} from "../../Assets/Svgs";
import { GSpacer } from "../../Ui_elements";

const AccountLayout = ({ children }) => {
  const { pathname } = useLocation();

  console.log({ pathname });
  return (
    <Container>
      <Header>
        <LeftIcon />
        <HeaderLeftTxtWrapper>
          <AccountTxt>My Account</AccountTxt>
          <WelcomeTxt>Hi, Maxwell Philip</WelcomeTxt>
        </HeaderLeftTxtWrapper>
        <WalletBox>
          <WalletTopWrapper>
            <WalletBalanceWrapper>
              <WalletIcon />
              <WalletTxt>Wallet balance</WalletTxt>
            </WalletBalanceWrapper>
            <CurrencyDropdown />
          </WalletTopWrapper>
          <Balance>₦0.00</Balance>
        </WalletBox>
        <RightIcon />
      </Header>
      <ContentWrapper>
        <LeftSectionWrapper>
          <AccountTitle>Account information</AccountTitle>
          <SideNavWrapper>
            {accountNavInfo.map(({ label, link, id }) => (
              <SideNav $active={link === pathname} key={id} to={link}>
                {label}
              </SideNav>
            ))}
          </SideNavWrapper>
          <GSpacer size={120} />
          <SideNav>Log out</SideNav>
        </LeftSectionWrapper>
        <RightSectionWrapper>{children}</RightSectionWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default AccountLayout;

const Container = styled.div``;
const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 241px;
  flex-shrink: 0;
  background: #fffbf6;
  overflow: hidden;
  padding: 42px 5%;
`;

const LeftIcon = styled(AccountLeftStar)`
  position: absolute;
  left: 0;
  top: 22px;
`;

const RightIcon = styled(AccountRightStar)`
  position: absolute;
  right: 0;
  bottom: 12px;
`;

const HeaderLeftTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const AccountTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const WelcomeTxt = styled.p`
  color: var(--Black-500, #151515);
  font-family: "Roboto Serif";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 44px */
`;

const WalletBox = styled.div`
  width: 361px;
  height: 99px;
  flex-shrink: 0;
  border: 0.318px solid #eaeaea;
  background: #fff;
  padding: 15px 20px;
  z-index: 1;
`;

const WalletTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WalletBalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const WalletTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
`;

const CurrencyDropdown = styled.div`
  width: 43px;
  height: 16px;
`;

const Balance = styled.p`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 33.6px */
  margin-top: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 48px 147px 48px 5%;
  border: 0.774px solid #eaeaea;
  background: #fff;
`;

const AccountTitle = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
`;

const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 83px;
`;

const SideNav = styled(Link)`
  width: 256px;
  color: ${({ $active }) =>
    $active ? `var(--Black-500, #151515)` : `var(--Black-300, #626262)`};
  font-size: ${({ $active }) => ($active ? `28px` : `22px`)};
  font-style: normal;
  font-weight: ${({ $active }) => ($active ? `500` : `400`)};
  line-height: 120%;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    color: unset;
  }
`;

const RightSectionWrapper = styled.div`
  flex-grow: 1;
`;
