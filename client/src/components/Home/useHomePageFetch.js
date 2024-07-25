/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

function useHomePageFetch() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState();
  const fetchUser = async (userId) => {
    const response = await axios.get(`http://localhost:4000/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    setUserData(response?.data);
  };
  useEffect(() => {
    fetchUser(user?._id);
  }, []);

  return { userData, fetchUser };
}

export default useHomePageFetch;
