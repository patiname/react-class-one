import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

export const ColorEvent = () => {
  const [color, setColor] = useState("gold");
  const [num, setNum] = useState(0);

  const onClickChagne = () => {
    if (num === 0) {
      setColor("salmon");
      setNum(num + 1);
    } else if (num === 1) {
      setColor("gold");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box bgColor={color} onClick={onClickChagne}></Box>
    </div>
  );
};
