import React from "react";
import "./Tolbar.css";
import DrawerTogglebutton from "../Sidedraw/DrawerTogglebutton";

const Tolbar = (props) => {
  return (
    <div>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toogle-button">
            <DrawerTogglebutton click={props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo">
            <a href="/">LOGO HERE</a>
          </div>
          <div className="specer"></div>
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <a href="/blogs"> Blogs</a>
              </li>
              <li>
                <a href="/about"> About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Tolbar;
