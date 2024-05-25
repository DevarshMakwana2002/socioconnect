import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<ProfilePage />} />
    </Routes>
  );
};

export default ProfileRoutes;
