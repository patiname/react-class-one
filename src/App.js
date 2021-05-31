// import ClassComponent from "./02.component,props/ClassComponent";
// import FnComponent from "./02.component,props/FnComponent";
// import Menu from "./02.component,props/Menu";
// import MapFn from "./03.mapFunction/MapFn";
// import Com from "./03.mapFunction/Com";
// import Kakao from "./03.mapFunction/Kakao";
// import "./styles/styles.css";
import ClassNameStyle from "./04.style/ClassNameStyle";
import { GlobalStyled } from "./styles/Rest";

// const menus = [
//   {
//     id: 1,
//     menuName: "피자",
//     side: "콜라",
//   },
//   {
//     id: 2,
//     menuName: "치킨",
//     side: "사이다",
//   },
//   {
//     id: 3,
//     menuName: "삼겹살",
//     side: "환타",
//   },
//   {
//     id: 4,
//     menuName: "파스타",
//     side: "레몬티",
//   },
//   {
//     id: 5,
//     menuName: "족발",
//     side: "미란다",
//   },
// ];

function App() {
  return (
    <div>
      {/* <FnComponent menu="라면" side="김밥" day="5월" />
      <ClassComponent menu="파스타" side="콜라" day="5월" /> 
      <Menu food={menus} />*/}
      {/* 2일차 끝 */}

      {/* <MapFn /> */}
      {/* <Com /> */}
      {/* <Kakao /> */}
      {/* 3일차 */}

      <GlobalStyled />
      <ClassNameStyle />
    </div>
  );
}

export default App;
