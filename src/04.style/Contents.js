import styled from "styled-components";
import { GlobalTitle } from "../styles/Rest";
import { WebContents } from "./WebContents";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ConWrap = styled.div`
  max-width: 400px;
  width: 100%;
  border: 3px solid black;
`;

const BgWrap = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bgImg});
`;

const Con = styled.div`
  padding: 0 10px 10px 10px;
  font-size: 16px;
  font-weight: 100;
  opacity: 0.5;
`;

const Contents = ({ bg, title, desc }) => {
  //   console.log(bg, title, desc);
  return (
    <Wrap>
      {/* <ConWrap>
        <BgWrap bgImg={bg}></BgWrap>
        <GlobalTitle color="teal">{title}</GlobalTitle>
        <Con>{desc}</Con>
      </ConWrap> */}
      <WebContents />
    </Wrap>
  );
};

export default Contents;
