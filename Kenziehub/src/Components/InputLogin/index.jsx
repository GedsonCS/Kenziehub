import React from "react";

const InputLogin = ({ label, type, placeholder, register, error }) => {
   return (
      <fieldset>
         {label && <label htmlFor={register.name}>{label}</label>}
         <input type={type} id={register.name} placeholder={placeholder} {...register} />
         {error && <span>{error.message}</span>}
      </fieldset>
   );
};

export default InputLogin;