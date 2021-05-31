import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalTitle = styled.div`
  padding: 10px;
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body{
        background-color:#fefefefe;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
