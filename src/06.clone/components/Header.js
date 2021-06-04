import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #212121;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Items = styled.div`
  &:nth-child(1) {
    font-size: 27px;
    margin-left: 50px;
    color: #ff0202;
  }
  &:nth-child(3) {
    margin-right: 50px;
  }
`;

const Input = styled.input`
  all: unset;
  width: 400px;
  border: 1px solid #333;
  padding: 3px 15px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Items>
        <FontAwesomeIcon icon={faYoutube} />
      </Items>

      <Items>
        <Input type="search" placeholder="검색" />
      </Items>

      <Items>
        <FontAwesomeIcon icon={faUser} />
      </Items>
    </SHeader>
  );
};
