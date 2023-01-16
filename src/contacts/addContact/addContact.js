import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddContact = ({ onAddNewContact }) => {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+xx(xx)xx-xx-xxx");
  const [email, setEmail] = useState("email@email.com");
  const [avatar, setAvatar] = useState(0);
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("Friends");
  const [isRedirect, setIsRedicrect] = useState(false);

  const onGetName = (event) => {
    setName(event.target.value);
  };
  const onGetPhone = (event) => {
    setPhone(event.target.value);
  };
  const onGetEmail = (event) => {
    setEmail(event.target.value);
  };
  const onGetAvatar = (event) => {
    setAvatar(event.target.value);
  };
  const onGetGender = (event) => {
    setGender(event.target.value);
  };
  const onGetCategory = (event) => {
    setCategory(event.target.value);
  };

  const onSave = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      name,
      phone,
      email,
      avatar,
      gender,
      category,
    };
    onAddNewContact(newContact);
    setIsRedicrect(true);
  };

  if (isRedirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="row">
        <div className="col-7">
          <h2>Add new contact</h2>
          <form onSubmit={onSave}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={onGetName}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                onChange={onGetPhone}
                value={phone}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onGetEmail}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Avatar</label>
              <input
                type="number"
                min={0}
                max={99}
                className="form-control"
                onChange={onGetAvatar}
                value={avatar}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={onGetGender}
                defaultValue={gender}
              >
                <option value>Select gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={onGetCategory}
                defaultValue={category}
              >
                <option value>Select category</option>
                <option value="Work">Work</option>
                <option value="Family">Family</option>
                <option value="Private">Private</option>
                <option value="Friends">Friends</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>{" "}
        </div>
        <div className="col-5">User information </div>
      </div>
    </>
  );
};

export default AddContact;
