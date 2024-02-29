import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/account/personal-information", { replace: true });
  }, [navigate]);

  return <></>;
};

export default AccountPage;
