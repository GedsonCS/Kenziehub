import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services";

export const LoginFormContext = createContext({});

export const LoginFormProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      autoLogin();
    }
  }, []);

  const LoginUser2 = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);

      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      toast.success("login efetuado com Sucesso");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou senha Inválido");
    }
  };

  const logout = () => {
    toast.success("logout efetuado com sucesso");

    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  const registerUser2 = async (formData) => {
    try {
      const response = await api.post("/users", formData);

      window.location.href = "/";
      toast.success("Cadastro efetuado com Sucesso");
    } catch (error) {
      toast.error("Erro ao tentar cadastrar");
    }
  };

  const submitRegister = (formData) => {
    registerUser2(formData);
  };

  return (
    <>
      <LoginFormContext.Provider
        value={{ LoginUser2, logout, user, registerUser2, submitRegister }}
      >
        {children}
      </LoginFormContext.Provider>
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
