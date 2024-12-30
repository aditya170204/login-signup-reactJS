import React from "react";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isloggedIn");
    location.href = "/auth/login";
  };

  return (
    <div>
      <br />
      <br />
      <br />
      Dashboard
      <br />
      <br />
      <>if you want to go out , go then</> <br />
      <br />
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default Dashboard;
