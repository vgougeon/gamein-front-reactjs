import React, { Component } from 'react';
import Header from './header/header';
import SideNav from './sidenav/sidenav';

class Layout extends Component {
    state = { }
    render() { 
        return (
            <React.Fragment>
                <Header />
                <SideNav />
            </React.Fragment>
        );
    }
}
 
export default Layout;