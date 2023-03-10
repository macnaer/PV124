import React from "react";
import { connect } from "react-redux";
import ContactItem from "./contact-item/contact-item";

const ContactList = ({ List }) => {
  const item = List.map((contact) => {
    return <ContactItem key={contact.id} {...contact} />;
  });

  return (
    <div className="ac-custom ac-checkbox ac-checkmark">
      <div className="input-group">
        <input
          type="text"
          className="contacts-list-search"
          placeholder="Search"
        />
      </div>
      <div className="unit head">
        <div className="field name">
          <div className="check">
            <input id="cb1" name="cb1" type="checkbox" />
            <label htmlFor="cb1"></label>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          Name
        </div>
        <div className="field phone">Phone</div>
        <div className="field email icons">Email</div>
      </div>
      {item.length > 0 ? item : <h3>No contacts found.</h3>}
    </div>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer;
  return { List };
};

export default connect(mapStateToProps)(ContactList);
