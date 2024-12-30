import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (token && pathname.includes("auth")) {
      navigate("/dashboard");
    }
  }, []);
  return children;
};

export default Redirect;
