import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootCategory = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/categories/all");
  }, []);

  return <></>;
};

export default RootCategory;
