import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 550px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  all: unset;
  border: 1px solid ${(props) => (props.hasError ? "salmon" : "#555")};
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  &::placeholder {
    font-size: 14px;
    font-weight: 100;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  padding: 18px 10px;
  background-color: #006266;
  text-align: center;
  margin-top: 50px;
  opacity: ${(props) => (props.canClick ? "0.3" : "1")};
  cursor: ${(props) => (props.canClick ? "default" : "pointer")};
`;
