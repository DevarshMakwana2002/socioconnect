import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import DefaultRoute from "./DefaultRoute";
import ProfileRoutes from "../../../features/Profile/ProfileRoutes";
import { useSelector } from "react-redux";

const PrivateModuleRoutes = () => {
  const navigate = useNavigate();
  const isAuth = Boolean(useSelector((state) => state.token));

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

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
