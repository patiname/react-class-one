import styled from "styled-components";
import { WebConArr } from "../ConApi";
import { Desc, Title } from "../styles/Rest";

const ConWrap = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 32%;
  background-color: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
`;

const BG = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const TextWrap = styled.div`
  padding: 25px;
`;

export const WebContents = () => {
  return (
    <ConWrap>
      {WebConArr.map((con) => (
        <Con key={con.id}>
          <BG bg={con.bgImg}></BG>
          <TextWrap>
            <Title>{con.title}</Title>
            <Desc>{con.description}</Desc>
          </TextWrap>
        </Con>
      ))}
    </ConWrap>
  );
};
