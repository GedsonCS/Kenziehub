import React, { useState, useContext } from "react";
import { api } from "../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext } from "react";
import { LoginFormContext } from "./LoginFormContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");

  const { user } = useContext(LoginFormContext);

  const [userTech, setUserTech] = useState(user.techs);
  const [editTech, seteditTech] = useState(null);

  const createTech = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTech([...userTech, response.data]);
      toast.success("Tecnologia Adicionada com sucesso");
    } catch (error) {
      toast.error(
        "User Already have this technology created, you can only update it"
      );
    }
  };

  const deleteTech = async (noteId) => {
    try {
      const response = await api.delete(`users/techs/${noteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = userTech.filter((tech) => tech.id !== noteId);
      setUserTech(newTechs);
      toast.success("Tecnologia removida com sucesso");
    } catch (error) {
      toast.error("Não foi Possível deletar a Tecnologia");
    }
  };

  const updateTech = async (formData, noteId) => {
    try {
      const response = await api.put(`/users/techs/${noteId}`, formData);
      const newTech = userTech.map((tech) => {
        if (noteId === tech.id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });
      setUserTech(newTech);
      toast.success("Tecnologia Atualizada com sucesso");
    } catch (error) {
      toast.error("Não foi Possível Atualizar a Tecnologia");
    }
  };

  return (
    <>
      <TechContext.Provider
        value={{
          deleteTech,
          createTech,
          userTech,
          setUserTech,
          updateTech,
          editTech,
          seteditTech,
        }}
      >
        {children}
      </TechContext.Provider>
      ;
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
