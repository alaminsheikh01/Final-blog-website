import { useState, Component } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import SideDrawer from "../components/mobile_nav/Sidedraw/SideDrawer";
import Backdrop from "../components/mobile_nav/Backdrop/Backdrop";
import Tolbar from "../components/mobile_nav/Tolbar/Tolbar";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

class Header extends Component {
  state = {
    sideDraerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDraerOpen: !prevState.sideDraerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDraerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDraerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        {/* for mobile menu start */}
        <div className="d-bock d-md-block d-xl-none d-lg-none">
          <div style={{ height: "100%" }}>
            <Tolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDraerOpen} />
            {backdrop}
            <main style={{ marginTop: "64px" }}></main>
          </div>
        </div>
        {/* for mobile menu end  */}

        <Navbar
          color="light"
          light
          expand="md"
          style={{ fontWeight: "bold", borderBottom: "1px solid #0069D9" }}
        >
          <Link href="/">
            <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
          </Link>

          <div className="d-none d-lg-block ml-auto d-xl-block d-md-none mt-1 mb-1">
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <React.Fragment>
                  <NavItem>
                    <Link href="/blogs">
                      <NavLink>Blogs</NavLink>
                    </Link>
                  </NavItem>
                </React.Fragment>

                {!isAuth() && (
                  <React.Fragment>
                    <NavItem>
                      <Link href="/signin">
                        <NavLink>Signin</NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/signup">
                        <NavLink>Signup</NavLink>
                      </Link>
                    </NavItem>
                  </React.Fragment>
                )}

                {isAuth() && isAuth().role === 0 && (
                  <NavItem>
                    <Link href="/user">
                      <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                    </Link>
                  </NavItem>
                )}

                {isAuth() && isAuth().role === 1 && (
                  <NavItem>
                    <Link href="/admin">
                      <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                    </Link>
                  </NavItem>
                )}

                {isAuth() && (
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      onClick={() => signout(() => Router.replace(`/signin`))}
                    >
                      Signout
                    </NavLink>
                  </NavItem>
                )}

                <NavItem>
                  <Link href="/user/crud/blog">
                    <NavLink className="btn btn-primary text-light">
                      Write a blog
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
