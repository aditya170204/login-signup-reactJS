import React, { useEffect } from "react";
import LoginPage from "./components/LoginPage";
import RegisterUser from "./components/RegisterUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import Redirect from "./components/Redirect";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/auth/login",
      element: (
        <>
          <Redirect>
            <Home />
            <LoginPage />
          </Redirect>
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Protected>
            <Home />
            <Dashboard />
          </Protected>
        </>
      ),
    },
    {
      path: "/auth/registeruser",
      element: (
        <>
          <Redirect>
            <Home />
            <RegisterUser />
          </Redirect>
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
