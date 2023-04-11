import * as yup from "yup";

export const modalAddTechSchema = yup.object().shape({
  title: yup.string().required("O Nome é Obrigatório"),
  status: yup.string().required("O Nivel é Obrigatório"),
});
