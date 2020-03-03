import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "../modules/base";
import ViewSelector from "../components/ViewSelector";

class ViewSelectorContainer extends Component {
  handleSelect = view => {
    const { BaseActions } = this.props;
    BaseActions.setView(view);
  };

  render() {
    const { view } = this.props;
    const { handleSelect } = this;

    return <ViewSelector selected={view} onSelect={handleSelect} />;
  }
}

export default connect(
  state => ({
    view: state.base.get("view")
  }),
  dispatch => ({
    // bindActionsCreators는 액션함수들을 자동으로 바인딩해준다.
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ViewSelectorContainer);
