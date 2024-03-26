import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootCategory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/categories/all");
  }, [navigate]);

  return <></>;
};

export default RootCategory;
