import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DefaultRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>hello</div>;
};

export default DefaultRoute;
