import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalTitle = styled.div`
  padding: 10px;
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;
`;

export const Desc = styled.div`
  font-size: 16px;
  font-weight: 100;
  line-height: 22px;
`;

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{ box-sizing:border-box}
    body{
        background-color:#191919;
        font-family: 'Noto Sans KR', sans-serif;
        color:white;
    }
`;
