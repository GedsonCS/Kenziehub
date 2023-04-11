import React from "react";
import { HeaderDash } from "../../Components/HeaderDash";
import { InfoDash } from "../../Components/InfoDash";
import { RenderTechs } from "../../Components/RenderTechs";
import { ModalAddTech } from "../../Components/RenderTechs/ModalAddTech";

import { StyledDash } from "./styled";

export const Dashbord = () => {
  return (
    <StyledDash>
      <HeaderDash />
      <InfoDash />
      <RenderTechs />
    </StyledDash>
  );
};
