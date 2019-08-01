import React, { Component } from "react";
import AuthManager from './auth-manager/auth-manager';
import { UserContext } from "../../../services/auth/userProvider";
import "./header.scss";

class Header extends Component {
  static contextType = UserContext;
  render() {
    return (
      <header>
        <div className="item">
          <i className="fas fa-bars aside-action" onClick={this.props.toggleOpen} />
          <div id="logo" className="d-none d-md-flex">
            <img src="http://njak.fr/assets/favicon.png" alt="Logo gamein" />
          </div>
        </div>
        <div className="item search-bar">
          <div id="search">
            <i className="fas fa-search" />
            <input type="search" placeholder="Rechercher..." />
          </div>
        </div>
        <AuthManager/>
      </header>
    );
  }
}

export default Header;
