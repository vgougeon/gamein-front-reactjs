import React, { Component } from 'react';
import Avatar from './avatar/avatar';
import Message from './message/message';
import { connect } from 'react-redux';
import './social.scss';
class Social extends Component {
    state = {  }
    handleSubmitMessage = (e) => {
        e.preventDefault()
        this.props.addMessage({ username: 'Njak', message: e.target.message.value})
        e.target.message.value = ''
    }
    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
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
                        <div className="chat-head">
                            <div className="chat-head-user-infos">
                                <div className="avatar">
                                    <Avatar img = {'http://njak.fr/assets/imgs/accounts/91563805015.png'} status={ 0 } />
                                </div>
                                <span className="username">Njak</span>
                              
                            </div>
                            <i class="hide-chat fas fa-angle-double-right"></i>
                        </div>
                        <div className="messages">
                            { this.props.messages.map((message, i) =>
                                <Message
                                key={ i }
                                { ...message }
                                />
                            )}
                            <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }} />
                        </div>
                        <form onSubmit={ this.handleSubmitMessage }>
                        <input type='text' name='message' placeholder="Envoyez un message..." autoComplete='off' />
                        <input type='submit' className='d-none' />
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.social.messages
})
const mapDispatchToProps = (dispatch) => ({
    addMessage: (message) => dispatch({ type: 'SOCIAL_SEND_MESSAGE', message: message})
})
export default connect(mapStateToProps, mapDispatchToProps)(Social)