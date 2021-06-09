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
  animation: ${move_ani} 2s forwards;
  position: absolute;
  top: 0;
  left: 0;
`;

export const AniEvent = () => {
  return (
    <div>
      <button>시작</button>
      <button onClick={() => window.location.reload()}>재 시작</button>
      <Box></Box>
    </div>
  );
};
