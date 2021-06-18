import styled from "styled-components";

const SFormError = styled.div`
  margin: 10px 0;
  color: salmon;
`;

export const FormError = ({ message }) => {
  return <SFormError>{message}</SFormError>;
};
