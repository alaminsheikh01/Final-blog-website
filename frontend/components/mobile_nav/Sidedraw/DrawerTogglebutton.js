import React from "react";
import "./DrawerTogglebutton.css";

const DrawerTogglebutton = (props) => {
  return (
    <div>
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
      </button>
    </div>
  );
};

export default DrawerTogglebutton;
