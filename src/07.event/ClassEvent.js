import { Component } from "react";

export class ClassEvent extends Component {
  state = {
    num: 0,
  };

  render() {
    // const num = this.state.num;
    const { num } = this.state;

    const onClickPlus = () => {
      this.setState({
        num: num + 1,
      });
    };

    const onClickMinus = () => {
      this.setState({
        num: num - 1,
      });
    };

    return (
      <div>
        <h3>클래스형 이벤트 처리</h3>
        <div>{num}</div>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </div>
    );
  }
}
