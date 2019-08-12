import React, { Component } from "react";
import Header from "./header/header";
import SideNav from "./sidenav/sidenav";
import LoginPopup from "../shared/popup/login-popup/login-popup";
import Chat from '../shared/social/social';
import { UserContext } from '../../services/auth/userProvider';


class Layout extends Component {
  static contextType = UserContext;
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
        { this.context.layout.login &&
        <LoginPopup 
        show={ this.context.layout.login }
        toggle={ this.context.layout.toggleLogin } />
        }
        <Header toggleOpen={this.toggleOpen} />
        <section id="main">
        <SideNav toggleOpen={this.toggleOpen} isOpen = {this.state.Open} />
        {this.props.message}
        {this.props.children}
        {/* <Chat /> */}
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
