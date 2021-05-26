const Menu = ({ food }) => {
  console.log(food[0].menuName);
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <ul>
        <li>
          메뉴는 {food[0].menuName} 사이드는 {food[0].side}
        </li>
        <li>
          메뉴는 {food[1].menuName} 사이드는 {food[1].side}
        </li>
        <li>
          메뉴는 {food[2].menuName} 사이드는 {food[2].side}
        </li>
        <li>
          메뉴는 {food[3].menuName} 사이드는 {food[3].side}
        </li>
        <li>
          메뉴는 {food[4].menuName} 사이드는 {food[4].side}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
