import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.scss";
class SideNav extends Component {
 
  isOpen() {
    return ((this.props.isOpen) ? "" : "aside-fold");
  }

  render() {
    return (
        <aside className={this.isOpen()} >
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
            <NavLink  >
            <div class="button">
              <i class="fas fa-plus" /> Expand
              </div>
              </NavLink>
          </div>
          <div class="d-flex flex-column" />
        </aside>
    );
  }
}

export default SideNav;
