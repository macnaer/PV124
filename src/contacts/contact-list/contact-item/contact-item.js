import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const ContactItem = ({ name, phone, email, category, avatar, onDelete }) => {
  let categoryStyle = "lab lab-success";
  switch (category) {
    case "Work":
      categoryStyle = "lab lab-success";
      break;
    case "Family":
      categoryStyle = "lab lab-primary";
      break;
    case "Private":
      categoryStyle = "lab lab-danger";
      break;
    default:
      categoryStyle = "lab lab-warning";
      break;
  }

  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          <img src={avatar} alt="image" className="avatar" /> {name}
        </div>
        <div className={categoryStyle}>{category}</div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
      <div className="field icons-wrapper">
        <FontAwesomeIcon icon={faEdit} size="2x" className="icons edit" />
        <FontAwesomeIcon
          onClick={onDelete}
          icon={faTrashAlt}
          size="2x"
          className="icons delete"
        />
      </div>
    </div>
  );
};

export default ContactItem;
