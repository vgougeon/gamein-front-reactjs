import React from 'react';

function AuthButtons(props) {
    return (
        <React.Fragment>
            <div class="icon-button mr-3">
                <i class="fas fa-bell"></i>
            </div>
            <div class="icon-button">
                <img src={"http://njak.fr/assets/imgs/accounts/" + props.avatar } />
            </div>
        </React.Fragment>
    )
}

export default AuthButtons;