import React from "react";
import LoginPage from "./components/LoginPage";
import RegisterUser from "./components/RegisterUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Home />
          <Dashboard />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Home />
          <LoginPage />
        </>
      ),
    },
    {
      path: "/registeruser",
      element: (
        <>
          <Home />
          <RegisterUser />
        </>
      ),
    },
  ]);
  return (
    <div>
      so lets begin the war !!!
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
};

export default App;
