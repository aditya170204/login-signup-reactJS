import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!token && pathname === "/") {
      navigate("/auth/login");
    }
  }, [token]);
  return (
    <div>
      <div>
        <nav>
          <Link to="/auth/registeruser">
            <li>register</li>
          </Link>
          <Link to="/auth/login">
            <li>login</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
