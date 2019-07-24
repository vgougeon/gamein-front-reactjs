import React from 'react';

function AuthButtons(props) {
    return (
        <React.Fragment>
            <div className="icon-button mr-3">
                <i className="fas fa-bell"></i>
            </div>
            <div className="icon-button">
                <img alt="User profile" src={"http://njak.fr/assets/imgs/accounts/" + props.avatar } />
            </div>
        </React.Fragment>
    )
}

export default AuthButtons;