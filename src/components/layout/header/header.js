import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div class="item">
          <i class="fas fa-bars aside-action" />
          <div id="logo">
            <img src="assets/favicon.png" />
          </div>
          <div id="search">
            <i class="fas fa-search" />
            <input type="search" placeholder="Rechercher..." />
          </div>
          <div id="buttons">
            <a href="login">
              <button class="stroked-theme">
                <i class="fas fa-user-circle mr-1" />
                Connexion
              </button>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
