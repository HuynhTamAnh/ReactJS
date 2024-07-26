import { Route, Routes } from "react-router-dom";

//định nghĩa các router của ứng dụng
//admin
//http://localhost:9999/admin
//user
//http://localhost:9999/user
import React from "react";
import RegisterPage from "../pages/auth/RegisterPage";
import { Login } from "@mui/icons-material";
import LoginPage from "../pages/auth/LoginPage";
// import { Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
};
export default Router;
