import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/registeruser">
            <li>register</li>
          </Link>
          <Link to="/login">
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
