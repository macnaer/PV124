import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  UpdatedContactAction,
  SelectedContactAction,
} from "../../../Actions/ContactListActions";

import React from "react";
import { Link } from "react-router-dom";

const GetCaregoryStyle = (category) => {
  let categoryStyle = "lab lab-success field";
  switch (category) {
    case "Work":
      categoryStyle = "lab lab-success field";
      break;
    case "Family":
      categoryStyle = "lab lab-primary field";
      break;
    case "Private":
      categoryStyle = "lab lab-danger field";
      break;
    default:
      categoryStyle = "lab lab-warning field";
      break;
  }

  return categoryStyle;
};

const ContactItem = ({
  id,
  name,
  phone,
  email,
  category,
  avatar,
  gender,
  UpdatedContactAction,
  SelectedContactAction,
  List,
}) => {
  const URL = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

  const categoryStyle = GetCaregoryStyle(category);

  const onEditContact = (id) => {
    const index = List.findIndex((el) => el.id === id);
    const tmpList = List.slice();
    const currentContact = tmpList[index];
    SelectedContactAction(currentContact);
  };

  const onDeleteContact = (id) => {
    const index = List.findIndex((el) => el.id === id);
    let tmpList = List.slice();
    const part1 = List.slice(0, index);
    const part2 = List.slice(index + 1);
    tmpList = [...part1, ...part2];
    UpdatedContactAction(tmpList);
  };

  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div>
          <img src={URL} alt="image" className="avatar" /> {name}
        </div>
        <div className={categoryStyle}>{category}</div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
      <div className="field icons-wrapper">
        <Link to={"/edit-contact"}>
          {" "}
          <FontAwesomeIcon
            icon={faEdit}
            size="2x"
            className="icons edit"
            onClick={() => onEditContact(id)}
          />
        </Link>

        <FontAwesomeIcon
          icon={faTrashAlt}
          size="2x"
          onClick={() => onDeleteContact(id)}
          className="icons delete"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer;
  return { List };
};

const mapDispatchToProps = {
  UpdatedContactAction,
  SelectedContactAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
