// import ClassComponent from "./02.component,props/ClassComponent";
// import FnComponent from "./02.component,props/FnComponent";
// import Menu from "./02.component,props/Menu";
// import MapFn from "./03.mapFunction/MapFn";
// import Com from "./03.mapFunction/Com";
// import Kakao from "./03.mapFunction/Kakao";
// import "./styles/styles.css";
// import ClassNameStyle from "./04.style/ClassNameStyle";
// import { WebContents } from "./04.style/WebContents";
// import { Icons } from "./05.example/Icons";
// import { Music } from "./05.example/Music";
// import { Youtube } from "./06.clone/Youtube";
// import { ClassEvent } from "./07.event/ClassEvent";
// import { ColorEvent } from "./07.event/ColorEvent";
// import { FnEvent } from "./07.event/FnEvent";
// import { PopUp } from "./07.event/PopUp";
// import { Cant } from "./08.router/Cant";
// import { ReactRouter } from "./08.router/ReactRouter";
// import { AniEvent } from "./07.event/AniEvent";
import { GlobalStyled } from "./styles/Rest";
import { PhotoView } from "./08-1.router/PhotoView";
import { HelmetProvider } from "react-helmet-async";

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

      {/* <GlobalStyled />
      <ClassNameStyle /> */}
      {/* 4일차 */}

      {/* <Icons /> */}
      {/* <GlobalStyled />
      <Music /> */}
      {/* 5일차 */}

      {/* <GlobalStyled />
      <Youtube /> */}

      {/* <ClassEvent />
      <FnEvent /> */}
      {/* <ColorEvent /> */}
      {/* <PopUp /> */}
      {/* <AniEvent /> */}

      {/* <ReactRouter /> */}
      {/* <Cant /> */}

      <HelmetProvider>
        <GlobalStyled />
        <PhotoView />
      </HelmetProvider>
    </div>
  );
}

export default App;
