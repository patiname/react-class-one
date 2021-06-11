import { useState } from "react";
import styled, { keyframes } from "styled-components";

const move_ani = keyframes`
    0%{
        top:0; left:0;
    }
    50%{
        top:300px; left:300px;
    }
    100%{
        top:0; left:600px;
    }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: gold;
  animation: ${(props) => props.ani} 2s forwards;
  position: absolute;
  top: 100px;
  left: 0;
`;

export const AniEvent = () => {
  const [start, setStart] = useState();

  const onClickStart = () => {
    setStart(move_ani);
  };

  return (
    <div>
      <button onClick={onClickStart}>시작</button>
      <button onClick={() => window.location.reload()}>재 시작</button>
      <Box ani={start}></Box>
    </div>
  );
};
