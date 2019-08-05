import React, { Component } from "react";
import Header from "./header/header";
import SideNav from "./sidenav/sidenav";
import LoginPopup from "../shared/popup/login-popup/login-popup";

class Layout extends Component {
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
    
  }
  
  render() {
    return (
      <React.Fragment>
        <Header toggleOpen={this.toggleOpen} />
        <section id="main">
        <SideNav toggleOpen={this.toggleOpen} isOpen = {this.state.Open} />
        {this.props.message}
        {this.props.children}
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
