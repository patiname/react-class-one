import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(0);

  const onClickMinus = () => setNum(num - 1);

  return (
    <div>
      <h3>함수형 이벤트</h3>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
