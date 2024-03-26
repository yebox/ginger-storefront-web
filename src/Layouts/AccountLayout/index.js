import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { accountNavInfo } from "../../Pages/Shared/Account/data";
import { Link, useLocation } from "react-router-dom";
import {
  AccountLeftStar,
  AccountRightStar,
  WalletIcon,
} from "../../Assets/Svgs";
import { GSpacer } from "../../Ui_elements";
import { useDispatch, useSelector } from "react-redux";
import { devices, formatAmount } from "../../Utils";
import { useApiGet, useDeviceCheck } from "../../Hooks";
import { logout } from "../../Redux/Reducers";
import { getUserWallet } from "../../Urls";
import toast from "react-hot-toast";
import MobileAccountTab from "./components/mobileTabs";

const AccountLayout = ({ children }) => {
  const user = useSelector((state) => state?.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isMobile } = useDeviceCheck();
  const [currentTabPos, setCurrentTabPos] = useState(20);

  const { data, error } = useApiGet(
    ["get-product-details"],
    () => getUserWallet(),
    {
      select: (data) => data,
      onError: (error) => console.log(error),
    }
  );

  useEffect(() => {
    error && toast.error("Couldn't fetch balance, try again");
  }, [error]);

  const handleLogout = () => {
    dispatch(logout(null));
  };

  return (
    <>
      <Container>
        <Header>
          <LeftIcon />
          <HeaderLeftTxtWrapper>
            <AccountTxt>My Account</AccountTxt>
            <WelcomeTxt>{`Hi, ${user?.firstName} ${user?.lastName}`}</WelcomeTxt>
          </HeaderLeftTxtWrapper>
          <WalletBox>
            <WalletTopWrapper>
              <WalletBalanceWrapper>
                <WalletIcon />
                <WalletTxt>Wallet balance</WalletTxt>
              </WalletBalanceWrapper>
              <CurrencyDropdown />
            </WalletTopWrapper>
            <Balance>₦{formatAmount(data?.balance) || 0.0}</Balance>
          </WalletBox>
          <RightIcon />
        </Header>
        <ContentWrapper>
          <LeftSectionWrapper>
            <AccountTitle>Account information</AccountTitle>
            <SideNavWrapper>
              {accountNavInfo.map(({ label, link, id }) => {
                return isMobile ? (
                  <MobileAccountTab
                    label={label}
                    to={link}
                    key={id}
                    isActive={link === pathname}
                    setCurrentTabPos={setCurrentTabPos}
                    currentTabPos={currentTabPos}
                  />
                ) : (
                  <SideNav $active={link === pathname} key={id} to={link}>
                    {label}
                  </SideNav>
                );
              })}
            </SideNavWrapper>
            {!isMobile && <GSpacer size={120} />}
            {!isMobile && (
              <SideNav onClick={handleLogout} to={"/"}>
                Log out
              </SideNav>
            )}
          </LeftSectionWrapper>
          <RightSectionWrapper>{children}</RightSectionWrapper>
        </ContentWrapper>
      </Container>
    </>
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

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: unset;
    padding: 40px 20px;
    height: auto;
  }
`;

const LeftIcon = styled(AccountLeftStar)`
  position: absolute;
  left: 0;
  top: 22px;

  @media ${devices.mobileL} {
    left: -100px;
  }
`;

const RightIcon = styled(AccountRightStar)`
  position: absolute;
  right: 0;
  bottom: 12px;

  @media ${devices.mobileL} {
    display: none;
  }
`;

const HeaderLeftTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media ${devices.mobileL} {
    gap: 12px;
  }
`;

const AccountTxt = styled.p`
  color: var(--Black-300, #626262);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */

  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;

const WelcomeTxt = styled.p`
  color: var(--Black-500, #151515);
  font-family: "Roboto Serif";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 44px */

  @media ${devices.mobileL} {
    font-size: 34px;
  }
`;

const WalletBox = styled.div`
  width: 361px;
  height: 99px;
  flex-shrink: 0;
  border: 0.318px solid #eaeaea;
  background: #fff;
  padding: 15px 20px;
  z-index: 1;

  @media ${devices.mobileL} {
    margin-top: 30px;
    width: 100%;
  }
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

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 48px 147px 48px 5%;
  border: 0.774px solid #eaeaea;
  background: #fff;

  @media ${devices.mobileL} {
    padding: 20px;
    margin-bottom: 15px;
    border: unset;
  }
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
  white-space: nowrap;

  @media ${devices.mobileL} {
    flex-direction: row;
    gap: 20px;
    overflow-x: scroll;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 7px;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
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

  @media ${devices.mobileL} {
    font-size: ${({ $active }) => ($active ? `16px` : `15px`)};
    width: fit-content;
    flex-shrink: 0;
  }
`;

const RightSectionWrapper = styled.div`
  flex-grow: 1;
`;
