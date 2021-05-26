import ClassComponent from "./02.component,props/ClassComponent";
import FnComponent from "./02.component,props/FnComponent";

function App() {
  return (
    <div>
      <FnComponent menu="라면" side="김밥" day="5월" />
      <ClassComponent menu="파스타" side="콜라" day="5월" />
    </div>
  );
}

export default App;
