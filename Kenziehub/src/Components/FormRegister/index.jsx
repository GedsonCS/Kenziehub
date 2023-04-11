import React, { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { StyledRegisterForm } from "./styled";
import { StyledRegisterbutton1 } from "./styled";
import { StyledRegisterbutton2 } from "./styled";
import { Link } from "react-router-dom";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerformSchema";
import { LoginFormContext } from "../../Providers/LoginFormContext";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  //const { submitRegister } = useContext(RegisterFormContext);
  const { submitRegister } = useContext(LoginFormContext);

  return (
    <StyledRegisterForm>
      <div>
        <img src={Logo} alt="" />

        <Link to="/">
          <StyledRegisterbutton1>Voltar</StyledRegisterbutton1>
        </Link>
      </div>

      <form onSubmit={handleSubmit(submitRegister)} noValidate>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>

        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu Nome"
          register={register("name")}
          error={errors.name}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu Email"
          register={register("email")}
          error={errors.email}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          error={errors.password}
        />

        <Input
          label="Confirme Senha"
          type="password"
          placeholder="Confirme sua senha"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
          error={errors.bio}
        />

        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          register={register("contact")}
          error={errors.contact}
        />

        <fieldset>
          <label htmlFor="">Selecionar Módulo</label>
          <select {...register("course_module")} name="" id="">
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
        </fieldset>

        <StyledRegisterbutton2 type="submit">Cadastrar</StyledRegisterbutton2>
      </form>
    </StyledRegisterForm>
  );
};
