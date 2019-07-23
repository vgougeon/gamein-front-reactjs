import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./sidenav.scss";
class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {Open: false};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    console.log('Le lien a été cliqué.');
    this.setState(state => ({
      Open : !state.Open
    }));
    console.log(this.isOpen());
  }
  isOpen() {
    return ((this.state.Open) ? "" : "aside-fold");
  }

  render() {
    return (
        <aside className={this.isOpen()}>
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
            <NavLink  onClick={this.toggleOpen} >
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
