import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgray;
  cursor: pointer;
`;

const PopBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.canSee};
`;

const Close = styled.div``;

export const PopUp = () => {
  const [view, setView] = useState("none");

  const onClickSeeBox = () => setView("block");
  const onClickNoneBox = () => setView("none");

  return (
    <div>
      <Box onClick={onClickSeeBox}>
        <h3>클릭해주세요~</h3>
      </Box>
      <PopBox canSee={view}>
        <Close onClick={onClickNoneBox}>❌</Close>
      </PopBox>
    </div>
  );
};
