import { faCartPlus, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Hamburger = styled.span`
  font-size: 40px;
  color: salmon;
`;

export const Icons = () => {
  return (
    <div>
      <h1>폰트어썸 사용하기!</h1>
      <Hamburger>
        <FontAwesomeIcon icon={faEllipsisV} />
      </Hamburger>
      <FontAwesomeIcon style={{ color: "red" }} icon={faCartPlus} />
    </div>
  );
};
