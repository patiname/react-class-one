import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>페이지를 찾을수 없습니다.</h1>
      <Link to="/">홈으로가기 &rarr;</Link>
    </div>
  );
};
