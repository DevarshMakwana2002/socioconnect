import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  return <div>ProfilePage {id} </div>;
};

export default ProfilePage;
