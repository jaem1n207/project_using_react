import React, { Component } from "react";
import Counter from "./components/Counter";
import Option from "./components/Option";
import Button from "./components/Button";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={this.props.store} />
        <Option store={this.props.store} />
        <Button store={this.props.store} />
      </div>
    );
  }
}

export default App;
