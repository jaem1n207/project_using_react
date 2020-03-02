import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {
  render() {
    const { view } = this.props;

    return (
      <div>
        <Header />
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

export default App;
