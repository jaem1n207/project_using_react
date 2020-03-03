import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { view } = this.props;

    return (
      <div>
        <Header />
        <ViewSelectorContainer />
        {/* ViewSelectorContainer */}

        {/* view 값에 따라 다른 컨테이너를 보여준다 */}
        <Container visible={view === "favorite"}>
          {/* FavoriteListContainer */}
        </Container>
        <Container visible={view === "list"}>
          {/* InputContainer */}
          {/* ContactListContainer */}
        </Container>

        {/* ContactModalContainer */}
        {/* FloatingButtonContainer */}
      </div>
    );
  }
}

export default connect(state => ({
  view: state.base.get("view")
}))(App);

/* 
function generateRandomColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];

    // 0 부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}
*/
