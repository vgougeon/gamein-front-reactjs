import React, { Component } from "react";
import AuthManager from './auth-manager/auth-manager';
import SearchBar from "./search-bar/search-bar";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="item">
          <i className="fas fa-bars aside-action" onClick={this.props.toggleOpen} />
          <div id="logo" className="d-none d-md-flex">
            <img src="/assets/favicon.png" alt="Logo gamein" />
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
