import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PrivateModuleRoutes from "./PrivateModuleRoutes";

const ModuleRoutes = (props) => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<PrivateModuleRoutes />} /> */}
    </Routes>
  );
};

export default ModuleRoutes;
