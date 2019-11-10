import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Trans } from 'react-i18next';
import { UserContext } from '../../../services/auth/userProvider';
import "./sidenav.scss";
class SideNav extends Component {
  static contextType = UserContext;
  isOpen() {
    return ((this.props.isOpen) ? "" : "aside-fold");
  }
  navClicked() {
    // Cette fonction devra fermer le nav sur mobile lorsqu'un lien est cliqué
  }
  check = (paths) => {
    for(const path of paths)
      if(path == this.props.location.pathname.substr(1).split('/')[0])
        return true
    return false
  }
  render() {
    return (
        <aside className={this.isOpen()} >
          <div className="d-flex flex-column">
            <NavLink isActive={() => { return this.check([''])}} activeClassName='active' to='/' onClick={() => this.navClicked()}>
              <div className="button">
                <i className="fas fa-compass" /><Trans>nav-home</Trans>
              </div>
            </NavLink>
            <NavLink isActive={() => { return this.check(['games', 'game'])}} activeClassName='active' to='/games'>
              <div className="button">
                <i className="fas fa-gamepad" /><Trans>nav-games</Trans>
              </div>
            </NavLink>
            {/* <NavLink exact={true} activeClassName='active' to='/party'>
              <div className="button">
                <i className="fas fa-chess-queen" /><Trans>nav-party</Trans>
              </div>
            </NavLink> */}
            <NavLink isActive={() => { return this.check(['party'])}} activeClassName='active' to='/party'>
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

export default withRouter(SideNav)
