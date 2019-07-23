import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.scss";
class SideNav extends Component {
  state = {};
  render() {
    return (
        <aside>
          <div class="d-flex flex-column">
            <NavLink exact={true} activeClassName='active' to='/'>
              <div class="button">
                <i class="fas fa-compass" /> Home
              </div>
            </NavLink>
            <NavLink exact={true} activeClassName='active' to='/games'>
              <div class="button">
                <i class="fas fa-gamepad" /> Games
              </div>
            </NavLink>
            <NavLink exact={true} activeClassName='active' to='/contribute'>
              <div class="button">
                <i class="fas fa-hands-helping" /> Contribute
              </div>
            </NavLink>
          </div>
          <div class="d-flex flex-column" />
        </aside>
    );
  }
}

export default SideNav;
