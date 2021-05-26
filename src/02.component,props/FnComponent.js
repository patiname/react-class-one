const FnComponent = ({ menu, side, day }) => {
  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <div>
        오늘의 메뉴는 {menu} 사이드 메뉴는 {side} 날짜는{day}
      </div>
    </div>
  );
};

export default FnComponent;
