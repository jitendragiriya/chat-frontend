import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TOKEN } from "../constants";
import { LOGIN } from "../constants/urls"; 

const ProtectedRoute = () => {
  const navigate = useNavigate();
  //check is user is authenticated or not
  const redirect =  () => {
    const token =  localStorage.getItem(TOKEN);
    if (!token) {
      navigate(LOGIN);
    }
  };
  useEffect(() => {
    redirect();
  }, [navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
