import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../Providers/TechContext";
import {
  StyledModalRemodeAndeEdit,
  StyledModalRemodeAndeEditButton,
  StyledModalRemodeAndeEditButton2,
  StyledModalRemodeAndeEditDiv,
} from "./styled";

export const ModalRemoveAndEdit = ({ isOpen2, setOpemModalEdit }) => {
  const { editTech, updateTech, deleteTech, seteditTech } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  const submit = (formData) => {
    updateTech(formData, editTech.id);
  };

  if (isOpen2) {
    return (
      <StyledModalRemodeAndeEdit>
        <StyledModalRemodeAndeEditDiv>
          <p>Tecnologia Detalhes</p>
          <span
            onClick={() => {
              setOpemModalEdit(false), seteditTech(null);
            }}
          >
            x
          </span>
        </StyledModalRemodeAndeEditDiv>
        <form onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="">Nome do Projeto</label>
            <input type="text" id="title" {...register("title")} />
          </fieldset>
          <fieldset>
            <label htmlFor="Status">Status</label>
            <select name="" id="Status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <StyledModalRemodeAndeEditButton2>
            Salvar alterações
          </StyledModalRemodeAndeEditButton2>
          <StyledModalRemodeAndeEditButton
            type="button"
            onClick={() => deleteTech(editTech.id)}
          >
            Excluir
          </StyledModalRemodeAndeEditButton>
        </form>
      </StyledModalRemodeAndeEdit>
    );
  }

  return null;
};
