import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.scss";
class SideNav extends Component {
 
  isOpen() {
    return ((this.props.isOpen) ? "" : "aside-fold");
  }
  navClicked() {
    console.log(window)
  }
  render() {
    return (
        <aside className={this.isOpen()} >
          <div className="d-flex flex-column">
            <NavLink exact={true} activeClassName='active' to='/' onClick={() => this.navClicked()}>
              <div className="button">
                <i className="fas fa-compass" /> Home
              </div>
            </NavLink>
            <NavLink exact={true} activeClassName='active' to='/games'>
              <div className="button">
                <i className="fas fa-gamepad" /> Games
              </div>
            </NavLink>
            <NavLink exact={true} activeClassName='active' to='/contribute'>
              <div className="button">
                <i className="fas fa-hands-helping" /> Contribute
              </div>
            </NavLink>
          </div>
          <div className="d-flex flex-column" />
        </aside>
    );
  }
}

export default SideNav;
