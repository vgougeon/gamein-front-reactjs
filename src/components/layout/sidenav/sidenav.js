import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Trans } from 'react-i18next';
import { UserContext } from '../../../services/auth/userProvider';
import "./sidenav.scss";
class SideNav extends Component {
  static contextType = UserContext;
  isOpen() {
    return ((this.props.isOpen) ? "" : "aside-fold");
  }
  navClicked() {
  }
  render() {
    return (
        <aside className={this.isOpen()} >
          <div className="d-flex flex-column">
            <NavLink exact={true} activeClassName='active' to='/' onClick={() => this.navClicked()}>
              <div className="button">
                <i className="fas fa-compass" /><Trans>nav-home</Trans>
              </div>
            </NavLink>
            <NavLink exact={true} activeClassName='active' to='/games'>
              <div className="button">
                <i className="fas fa-gamepad" /><Trans>nav-games</Trans>
              </div>
            </NavLink>
            <NavLink exact={true} activeClassName='active' to='/party'>
              <div className="button">
                <i className="fas fa-chess-queen" /><Trans>nav-party</Trans>
              </div>
            </NavLink>
          </div>
          <div className="d-flex flex-column">
            { this.context.isLoggedIn &&
            <div className="button" onClick={ this.context.signOut } >
              <i className="fas fa-sign-out-alt" /><Trans>sign-out</Trans>
            </div>
            }
          </div>
        </aside>
    );
  }
}

export default SideNav;
