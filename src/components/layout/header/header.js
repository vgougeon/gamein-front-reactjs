import React, { Component } from "react";
import AuthManager from './auth-manager/auth-manager';
import { UserContext } from "../../../services/auth/userProvider";
import SearchBar from "./search-bar/search-bar";
import "./header.scss";

class Header extends Component {
  static contextType = UserContext;
  render() {
    return (
      <header>
        <div className="item">
          <i className="fas fa-bars aside-action" onClick={this.props.toggleOpen} />
          <div id="logo" className="d-none d-md-flex">
            <img src="http://54.37.228.12/assets/favicon.png" alt="Logo gamein" />
          </div>
        </div>
        <div className="item search-bar">
          <SearchBar />
        </div>
        <AuthManager/>
      </header>
    );
  }
}

export default Header;
