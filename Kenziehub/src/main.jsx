import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoginFormProvider } from "./Providers/LoginFormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginFormProvider>
        <App />
      </LoginFormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
