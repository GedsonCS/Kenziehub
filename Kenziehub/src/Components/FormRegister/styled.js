import styled from "styled-components";

export const StyledRegisterForm = styled.section`
    font-family: 'Inter', sans-serif;
    width: 369px;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 5% 0 0 0;
    color: #F8F9FA;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    form{
        background-color: #212529;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin: 2rem 0 0 0;

        h2{
            text-align: center;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
        }

        p{
            text-align: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;
            color: #868E96;
            margin: 0;
        }

        fieldset{
            border: none;
            display: flex;
            flex-direction: column;
            margin: 0 0 0.5rem 0;
        }

        label{
            color: #F8F9FA;
            margin: 0 0 0.5rem 0;
            font-size: 0.75rem;
            border-radius: 4px;
        }

        input{
            padding: 10px;
            background-color: #343B41;
            color: #F8F9FA;
            border: none;
        }

        select{
            padding: 10px;
            background-color: #343B41;
            color: #F8F9FA;
            border: none;
            width: 100%;
        }
    }

 
`

export const StyledRegisterbutton1 = styled.button`
    background-color: #212529;
    padding: 0 1rem 0 1rem;
    border: none;
    border-radius: 4px;
    color: #F8F9FA;
    width: 67px;
    height: 40px;
    cursor: pointer;

`

export const StyledRegisterbutton2 = styled.button`
    background-color: #59323F;
    width: 341px;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #F8F9FA;
    align-self: center;
    margin: 1rem 0 3rem 0;
    max-width: 92%;
    cursor: pointer;

`

