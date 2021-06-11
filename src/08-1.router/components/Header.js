import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";

const SHeader = styled.header``;

const InHeader = styled.div``;

const Logo = styled.div``;

const MenuWrap = styled.ul``;

const Menu = styled.li``;

export const Header = () => {
  return (
    <SHeader>
      <InHeader>
        <Logo>
          <Link to={routes.home}>LOGO</Link>
        </Logo>

        <MenuWrap>
          <Menu>
            <Link to={routes.subOne}>메뉴1</Link>
          </Menu>
          <Menu>
            <Link to={routes.subTwo}>메뉴2</Link>
          </Menu>
        </MenuWrap>
      </InHeader>
    </SHeader>
  );
};
