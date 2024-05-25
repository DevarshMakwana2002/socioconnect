import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import DefaultRoute from "./DefaultRoute";
import ProfileRoutes from "../../../features/Profile/ProfileRoutes";

const PrivateModuleRoutes = () => {
  const ROUTES = [
    {
      path: "/homepage",
      element: <HomePage />,
    },
    {
      path: "/profile",
      element: <ProfileRoutes />,
    },
  ];
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => {
        return <Route path={path} element={element} />;
      })}
      <Route path="*" element={<DefaultRoute />} />
    </Routes>
  );
};

export default PrivateModuleRoutes;
