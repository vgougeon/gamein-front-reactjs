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
                        <div className="messages">
                            { this.props.messages.map((message) =>
                                <Message 
                                img={ 'http://njak.fr/assets/imgs/accounts/91563805015.png' } 
                                message={ message.message }
                                username={ message.username }
                                />
                            )}
                            <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }} />
                        </div>
                        <form onSubmit={ this.handleSubmitMessage }>
                        <input type='text' name='message' placeholder="Envoyez un message..." />
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
    addMessage: (message) => dispatch({ type: 'SOCIAL_ADD_MESSAGE', message: message})
})
export default connect(mapStateToProps, mapDispatchToProps)(Social)