import React from "react";

const SideBar = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts<span>76</span>
        </div>
        <div className="list">
          <div className="head">Categories</div>
          <div className="unit">
            <div className="lab lab-success">Work</div>
            <span>7</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>8</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>13</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>47</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
