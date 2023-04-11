import React, { useContext, useEffect } from "react";
import { LoginFormContext } from "../../Providers/LoginFormContext";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user } = useContext(LoginFormContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return <>{user ? <Outlet /> : null}</>;
};
