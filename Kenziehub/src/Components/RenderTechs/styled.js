import styled from "styled-components";

export const StyledRenderTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 780px;
    margin: 1rem;

    h2 {
      color: #f8f9fa;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    img {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      padding: 10px;
      background-color: #343b41;

      color: #868e96;
      cursor: pointer;
    }
  }
`;

export const StyledRenderTechsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  ul {
    background-color: #343b41;
    width: 100%;
    max-width: 780px;

    border-radius: 4px;
    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    margin: 1rem;

    li {
      list-style: none;
      background-color: #121214;
      display: flex;
      justify-content: space-between;
      margin: 11px 2% 11px 2%;
      border-radius: 4px;
      cursor: pointer;

      h3 {
        color: #f8f9fa;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        padding: 0 1rem;
      }

      p {
        color: #868e96;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 22px;
        padding: 0 1rem;
      }
    }
  }
`;
