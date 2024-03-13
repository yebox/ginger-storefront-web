import { useEffect } from "react";
import {
  AuthRoutes,
  PrivateRoutes,
  SharedRoutes,
  AccountRoutes,
  SellerAuthRoutes,
} from ".";
import { useApiSend } from "../Hooks";
import { refreshToken } from "../Urls";
import ScrollToTop from "../Utils/scrollToTop";
// import { SellerDashboardLayout } from "../Layouts/SellerDashboardLayout";
import { useDispatch, useSelector } from 'react-redux';
import { logout, setTokenOnRefresh } from "../Redux";

export const AppRoute = () => {

  const user = useSelector(state => state.user);
  console.log(user, "user")
  const { refreshToken: token } = user;
  const dispatch = useDispatch()
  const { mutate } = useApiSend(
    refreshToken,
    (data) => {
      console.log(data, "refereshss")
      dispatch(setTokenOnRefresh(data?.accessToken))
    },
    () => {
      dispatch(logout)
    }
  );

  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      mutate({ refreshToken: token });
    }, 600000);

    return () => clearInterval(refreshTokenInterval);
  }, [mutate, token]);


  return (
    <>
      <ScrollToTop />
      <SharedRoutes />
      <AuthRoutes />
      <PrivateRoutes />
      <AccountRoutes />
      <SellerAuthRoutes />
    </>

    // <SellerDashboardLayout/>
  );
};
