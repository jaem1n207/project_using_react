import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0
  };

  //버튼 클릭 시 number + 1 증가
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  //버튼 클릭 시 number -1 감소
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.props.number}</div>
        <button onclick={this.handleIncrease}>+</button>
        <button onclick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;

/* 
import React from "react";

const MyName = ({ name }) => {
  return <div>{name}님 환영합니다.</div>;
};

export default MyName;
 */
