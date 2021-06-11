import styled from "styled-components";

const SSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: cetner;
`;

const Container = styled.div``;

export const Section = ({ children }) => {
  return (
    <SSection>
      <Container>{children}</Container>
    </SSection>
  );
};
