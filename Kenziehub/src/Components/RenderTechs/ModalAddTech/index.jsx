import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../Providers/TechContext";
import { modalAddTechSchema } from "./modalAddTechSchema";
import { StyledModalAddTech, StyledModalAddTechDiv } from "./styled";

export const ModalAddTech = ({ isOpen, setOpenmodal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(modalAddTechSchema) });

  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
  };

  if (isOpen) {
    return (
      <StyledModalAddTech>
        <StyledModalAddTechDiv>
          <p>Cadastrar tecnologia</p>
          <span onClick={() => setOpenmodal(false)}>x</span>
        </StyledModalAddTechDiv>
        <form onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="title">Nome</label>
            <input type="text" id="title" {...register("title")} />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Selecionar status</label>
            <select name="" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <button>Cadastrar Tecnologia</button>
        </form>
      </StyledModalAddTech>
    );
  }

  return null;
};
