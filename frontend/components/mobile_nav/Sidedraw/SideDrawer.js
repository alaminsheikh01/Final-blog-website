import React from "react";
import "./SideDrawer.css";
import { signout, isAuth } from "../../../actions/auth";
import Link from "next/link";
import Router from "next/router";
import { NavItem, NavLink } from "reactstrap";

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

        {isAuth() && isAuth().role === 1 && (
          <li>
            <Link href="/admin">
              <a>{`${isAuth().name}'s Dashboard`}</a>
            </Link>
          </li>
        )}

        {isAuth() && (
          <li>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => signout(() => Router.replace(`/signin`))}
            >
              Signout
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;
