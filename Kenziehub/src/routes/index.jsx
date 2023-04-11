import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashbord } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { Register } from "../pages/Register";
import { TechProvider } from "../Providers/TechContext";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<TechProvider><Dashbord /></TechProvider>}/>
      </Route>
    </Routes>
  );
};
