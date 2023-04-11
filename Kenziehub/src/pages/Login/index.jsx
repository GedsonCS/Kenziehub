import React from "react";
import { FormLogin } from "../../Components/FormLogin";
import { LoginFormProvider } from "../../Providers/LoginFormContext";
import { StyledLogin } from "./styled";

export const Login = () => {
  return (
    <StyledLogin>
      <FormLogin />
    </StyledLogin>
  );
};
