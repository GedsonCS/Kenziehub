import styled from "styled-components";

export const StyledModalRemodeAndeEdit = styled.div`
  position: fixed;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #212529;
  width: 300px;
  height: 300px;
  font-family: "Inter";
  border-radius: 4px;
  max-width: 100%;

  form {
    margin: 0 1rem 0 1rem;

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      margin: 1rem 0 1rem 0;
    }

    label {
      color: #f8f9fa;
      margin: 0 0 0.5rem 0;
      font-size: 0.75rem;
    }

    input {
      padding: 10px;
      background-color: #343b41;
      color: #f8f9fa;
      border: none;
    }

    select {
      padding: 10px;
      background-color: #343b41;
      color: #f8f9fa;
      border: none;
      width: 100%;
    }
  }
`;

export const StyledModalRemodeAndeEditDiv = styled.header`
  background-color: #343b41;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f8f9fa;
  font-family: "Inter";
  p {
    margin: 0.5rem 0 0.5rem 1rem;
  }
  span {
    margin: 0 1rem 0.5rem 0;
    cursor: pointer;
  }
`;

export const StyledModalRemodeAndeEditButton2 = styled.button`
  width: 160px;
  height: 40px;
  background-color: #59323f;
  border: none;
  color: #ffffff;
  cursor: pointer;

  margin: 1rem 1.5rem 1rem 0;
`;

export const StyledModalRemodeAndeEditButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #868e96;
  border: none;
  color: #ffffff;
  cursor: pointer;

  margin: 1rem 0 1rem 0;
`;
