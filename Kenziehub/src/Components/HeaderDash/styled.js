import styled from "styled-components";

export const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  border-bottom: #868e96 solid 1px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 780px;
    margin: 0 1rem;

    button {
      width: 50px;
      height: 32px;
      background-color: #212529;
      font-style: normal;
      font-weight: 600;

      text-align: center;

      color: #f8f9fa;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
