import React, { Component } from "react";
import { connect } from 'react-redux';
import authActions from '../../store/authActions';
import Header from "./header/header";
import SideNav from "./sidenav/sidenav";
import LoginPopup from "../shared/popup/login-popup/login-popup";
import Social from '../shared/social/social';
import Player from '../shared/player/player';


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
    console.log(this.props)
    return (
      <React.Fragment>
        { this.props.loginlayout &&
        <LoginPopup 
        show={ this.props.loginlayout }
        toggle={ authActions.toggleLogin } />
        }
        <section id="container">
        <Header toggleOpen={this.toggleOpen} />
        <section id="main">
        <SideNav toggleOpen={this.toggleOpen} isOpen = {this.state.Open} />
        {this.props.children}
        <Social />
        </section>
        <Player />
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loginlayout: state.auth.loginlayout
})
export default connect(mapStateToProps)(Layout)
