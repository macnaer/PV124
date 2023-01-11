import React from "react";

function filterItems(arr, query) {
  return arr.filter((el) =>
    el.category.toLowerCase().includes(query.toLowerCase())
  );
}

const SideBar = ({ List }) => {
  const workCount = filterItems(List, "Work");
  const familyCount = filterItems(List, "Family");
  const privateCount = filterItems(List, "Private");
  const friendsCount = filterItems(List, "Friends");

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts<span>{List.length}</span>
        </div>
        <div className="list">
          <div className="head">Categories</div>
          <div className="unit">
            <div className="lab lab-success">Work</div>
            <span>{workCount.length}</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>{familyCount.length}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>{privateCount.length}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>{friendsCount.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
