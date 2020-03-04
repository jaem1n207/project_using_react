import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "../modules/base";
import Input from "../components/Input";

class InputContainer extends Component {
  handleChange = e => {
    const { BaseActions } = this.props;
    BaseActions.changeSearch(e.target.value);
  };

  render() {
    const { keyword } = this.props;
    const { handleChange } = this.props;

    return <Input onChange={handleChange} view={keyword} placeholder="검색" />;
  }
}

export default connect(
  state => ({
    keyword: state.base.get("keyword")
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(InputContainer);
