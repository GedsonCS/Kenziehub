import styled from "styled-components";


export const StyledInfoDash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: #868E96 solid 1px;
  width: 100%;
    div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 780px;
        margin:  1rem;

        h2{
            color: #F8F9FA;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
        }

        span{
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 22px;

            color: #868E96;
        }
    }
  
    
`