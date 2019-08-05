import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './login-popup.scss';

class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="popup-wrapper">
                <div className="login-popup">
                    <div className="login-head">
                        <img src="http://njak.fr/assets/favicon.png"></img>
                        Gamein
                    </div>
                    <div className="info-wrapper">
                        <span className="mb-2 bold">Rejoignez la communauté !</span>
                        <div className="info-item">
                            <b></b> membres
                        </div>
                        <div className="info-item">
                            <b></b> jeux
                        </div>
                        <div className="info-item">
                            <b></b> musiques
                        </div>
                    </div>
                    <div className="login-wrapper">
                        <form className="w-100">
                            <h5 className="mb-4">Connexion</h5>
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Username"></input>
                            <label for="password" className="mt-2">Password</label>
                            <input type="password" name="password" id="password" placeholder="New password"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginPopup;