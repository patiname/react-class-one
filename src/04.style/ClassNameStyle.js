// import "../styles/styles.css";
import styled from "styled-components";
import Contents from "./Contents";
import { conApi } from "../ConApi";

const Wrap = styled.div``;

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
`;

const InHeader = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const MenuWrap = styled.ul`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
    &:nth-child(2) {
      color: red;
    }
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassNameStyle = () => {
  return (
    <Wrap>
      <Header>
        <InHeader>
          <Logo>LOGO</Logo>
          <MenuWrap>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
          </MenuWrap>
        </InHeader>
      </Header>

      <Section>
        <Contents bg={conApi.bgImg} title={conApi.title} desc={conApi.desc} />
      </Section>
    </Wrap>
  );
};

export default ClassNameStyle;
