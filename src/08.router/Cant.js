import { Link } from "react-router-dom";

export const Cant = () => {
  return (
    <ul>
      <li>
        <Link to="/">메인</Link>
      </li>
      <li>
        <Link to="/photo">포토</Link>
      </li>
      <li>
        <Link to="/video">비디오</Link>
      </li>
    </ul>
  );
};
