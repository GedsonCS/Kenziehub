import React, { useContext } from "react";
import { StyledHeader } from "./styled";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginFormContext } from "../../Providers/LoginFormContext";

export const HeaderDash = () => {
  const { logout } = useContext(LoginFormContext);
  return (
    <>
      <StyledHeader>
        <div>
          <img src={Logo} alt="" />
          <Link to="/">
            <button onClick={() => setTimeout(logout, 1)}>Sair</button>
          </Link>
        </div>
      </StyledHeader>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
