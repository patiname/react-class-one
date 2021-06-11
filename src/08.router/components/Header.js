import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Header = () => {
  return (
    <header>
      <Link to={routes.home}>메인</Link>
      <Link to={routes.photo}>포토</Link>
      <Link to={routes.video}>비디오</Link>
    </header>
  );
};
