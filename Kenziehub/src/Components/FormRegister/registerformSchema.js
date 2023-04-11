import * as yup from "yup"

export const registerFormSchema = yup.object().shape({
    name: yup.string().required("O nome é Obrigatório"),
    email: yup.string().required("O email é Obrigatório").email("O email digitado é inválido"),
    password: yup.string().required("A Senha é Obrigatória")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    confirmPassword: yup.string().required("Confirmar a senha é Obrigatório").oneOf([yup.ref("password")], "As senhas não correspondem"),
    bio: yup.string().required("A bio é Obrigatório"),
    contact: yup.string().required("O Contato é Obrigatório") ,
})