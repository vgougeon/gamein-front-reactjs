import React, { Component } from "react";
import AuthManager from './auth-manager/auth-manager';
import SearchBar from "./search-bar/search-bar";
import "./header.scss";
import Logo from "./logo/logo";
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Trans } from 'react-i18next';
import Icon from "../../shared/utils/icons/icon";
const navItem = require('./menu.json');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { path: this.getPath() }
  }
  componentWillReceiveProps(props) {
    this.setState({
      path: this.getPath()
    })
  }
  getPath() {
    return this.props.location.pathname.substr(1).split('/')[0]
  }
  navClicked() {
    // Cette fonction devra fermer le nav sur mobile lorsqu'un lien est cliqué
  }
  render() {
    return (
      <header>
        <div className="item">
          <div id="logo" className="d-none d-md-flex">
            <Logo />
          </div>
        </div>
        <div className="main-nav item">
          <div className="nav-container">
          { navItem.map(item => 
            <NavLink key={ item.name } isActive={() => { return item.paths.includes(this.getPath())}} activeClassName='active' to={ item.to } onClick={() => this.navClicked()}>
                <Icon active={ item.paths.includes(this.getPath()) } name={ item.icon } size="24px" fancy={ true }/>
            </NavLink>
          )}
          </div>
        </div>
        <AuthManager/>
      </header>
    );
  }
}
{/* <SearchBar /> */}
export default withRouter(Header)
