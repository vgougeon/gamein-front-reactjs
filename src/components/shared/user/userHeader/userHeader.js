import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './userHeader.scss';
class UserHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <div className="user-wrapper">
                    <img src={ "http://njak.fr/assets/imgs/skins/" + this.props.skin + ".png"} className="appear wrapper-banner" />
                    <img src={ "http://njak.fr/assets/imgs/accounts/" + this.props.avatar} className="avatar s-1" />
                    <div className="d-flex flex-column info">
                        <span className="name">{ this.props.display_name }</span>
                        <span className="username">@{ this.props.username } - {this.props.gradeName}</span>
                    </div>
                </div>
                <div className="box s-1 account">
                    <div className="menu justify-content-between">
                        <div className="d-flex h-100">
                            <NavLink exact={true} activeClassName='active' to='/user/Jabu'>PROFIL</NavLink>
                            <NavLink exact={true} activeClassName='active' to='/user/Jabu/games'>JEUX</NavLink>
                            <NavLink exact={true} activeClassName='active' to='/user/Jabu/ost'>OST</NavLink>
                        </div>
                        <div className="d-flex h-100">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserHeader;