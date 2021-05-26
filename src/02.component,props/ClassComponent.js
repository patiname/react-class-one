import { Component, useState } from "react";

class ClassComponent extends Component {
  render() {
    // console.log(this.props.menu, this.props.side);
    // const menu = this.props.menu;
    // const side = this.props.side;
    // const day = this.props.day;

    // console.log(this.props);
    const { menu, side, day } = this.props;
    // console.log(menu, side);

    return (
      <div>
        <h1>클래스형 컴포넌트</h1>
        <div>
          오늘의 메뉴는 {menu} 사이드 메뉴는 {side} 날짜는 {day}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
