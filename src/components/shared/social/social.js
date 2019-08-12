import React, { Component } from 'react';
import Avatar from './avatar/avatar';
import Message from './message/message';
import './social.scss';
class Social extends Component {
    state = {  }
    render() { 
        return (  
            <div className="social-container">
                <div className="user">
                    <div className="avatar">
                        <Avatar 
                        img={ 'http://njak.fr/assets/imgs/accounts/61563909495.png' }
                        status={ 0 }
                        />
                    </div>
                    <div className="username">Njak</div>
                </div>
                <div className="user">
                    <div className="avatar">
                        <Avatar 
                        img={ 'http://njak.fr/assets/imgs/accounts/91563805015.png' }
                        status={ 0 }
                        />
                    </div>
                    <div className="username">Njak</div>
                </div>
                <section className="chat-container">
                    <div className="chat-content">
                        <Message 
                        img={ 'http://njak.fr/assets/imgs/accounts/91563805015.png' } 
                        />
                        <Message 
                        img={ 'http://njak.fr/assets/imgs/accounts/91563805015.png' } 
                        />
                        <Message 
                        img={ 'http://njak.fr/assets/imgs/accounts/91563805015.png' } 
                        />
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Social;