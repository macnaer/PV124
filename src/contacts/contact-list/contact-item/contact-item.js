import React from "react";

const ContactItem = ({ name, phone, email, category }) => {
  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt="image"
            className="avatar"
          />{" "}
          {name}
        </div>
        <div className="lab lab-warning">{category}</div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
    </div>
  );
};

export default ContactItem;
