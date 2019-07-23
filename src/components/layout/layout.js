import React, { Component } from "react";
import Header from "./header/header";
import SideNav from "./sidenav/sidenav";

class Layout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <section id="main">
        <SideNav />
        {this.props.message}
        {this.props.children}
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
