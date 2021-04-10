import React from "react";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = ["side-drawer  open"];
  }
  return (
    <div className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
