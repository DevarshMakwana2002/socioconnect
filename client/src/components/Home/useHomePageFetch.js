/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";

function useHomePageFetch() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState();
  const fetchUser = (userId) => {
    const response = axios.get(`http://localhost:4000/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    setUserData(response);
    console.log(response);
  };
  useEffect(() => {
    fetchUser(user?._id);
  }, []);

  return { userData };
}

export default useHomePageFetch;
