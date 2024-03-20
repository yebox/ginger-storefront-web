import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootCategory = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/categories/all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default RootCategory;
