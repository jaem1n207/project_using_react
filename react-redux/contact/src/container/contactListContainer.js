import React, { Component } from "react";
import ContactList from "../components/ContactList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as modalActions from "../modules/modal";
import * as contactsActions from "../modules/contacts";

class ContactListContainer extends Component {
  // 수정 모달 열기
  handleOpenModify = id => {
    const { contacts, ModalActions } = this.props;

    // id 로 contact 조회
    const contact = contacts.find(contact => contact.get("id") === id);

    ModalActions.show({
      mode: "modify",
      contact: contact.toJS()
    });
  };

  redner() {
    const { contacts, keywword } = this.props;
    const { handleOpenModify, handleToggleFavorite } = this;

    return (
      <ContactList
        contacts={contacts}
        onOpenModify={handleOpenModify}
        onToggleFavorite={handleToggleFavorite}
        seaerch={keyword}
      />
    );
  }
}

export default connect(
  state => ({
    keyword: state.base.get("keyword"),
    contacts: state.contacts
  }),
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    ContactsActions: bindActionCreators(contactsActions, dispatch)
  })
)(ContactListContainer);