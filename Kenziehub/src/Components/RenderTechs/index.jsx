import React, { useContext, useState } from "react";
import { LoginFormContext } from "../../Providers/LoginFormContext";
import { StyledRenderTechs, StyledRenderTechsList } from "./styled";
import Soma from "../../assets/Soma.svg";
import { ModalAddTech } from "./ModalAddTech";
import { TechContext } from "../../Providers/TechContext";
import { ModalRemoveAndEdit } from "./ModalRemoveAndEdit";

export const RenderTechs = () => {
  const { user } = useContext(LoginFormContext);
  const { seteditTech, editTech } = useContext(TechContext);
  const { userTech } = useContext(TechContext);

  const [opemModal, setOpenmodal] = useState(false);
  const [opemModalEdit, setOpemModalEdit] = useState(false);

  return (
    <>
      <StyledRenderTechs>
        <div>
          <h2>Tecnologias</h2>
          <img src={Soma} alt="" onClick={() => setOpenmodal(true)} />
        </div>
      </StyledRenderTechs>

      <StyledRenderTechsList>
        <ul>
          {userTech.map((tech) => (
            <li
              key={tech.id}
              onClick={() => {
                setOpemModalEdit(true), seteditTech(tech);
              }}
            >
              <h3>{tech.title}</h3>
              <p>{tech.status}</p>
            </li>
          ))}
        </ul>
      </StyledRenderTechsList>

      <ModalAddTech isOpen={opemModal} setOpenmodal={setOpenmodal} />
      {editTech ? (
        <ModalRemoveAndEdit
          isOpen2={opemModalEdit}
          setOpemModalEdit={setOpemModalEdit}
        />
      ) : null}
    </>
  );
};
