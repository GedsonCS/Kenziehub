import React, { useContext } from "react";
import { LoginFormContext } from "../../Providers/LoginFormContext";
import { StyledInfoDash } from "./styled";

export const InfoDash = () => {
  const { user } = useContext(LoginFormContext);

  const token = JSON.parse(localStorage.getItem("@token"));
  const userid = JSON.parse(localStorage.getItem("@userid"));

  return (
    <StyledInfoDash>
      <div>
        <h2>Olá, {user.name}</h2>
        <span>{user.course_module}</span>
      </div>
    </StyledInfoDash>
  );
};
