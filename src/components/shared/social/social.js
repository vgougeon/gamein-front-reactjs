import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './avatar/avatar';
import Message from './message/message';
import socialActions from '../../../store/socialActions';
import { connect } from 'react-redux';
import './social.scss';

class Social extends Component {
    state = { }
    handleSubmitMessage = (e) => {
        e.preventDefault()
        this.props.addMessage({ message: e.target.message.value})
        e.target.message.value = ''
    }
    componentDidUpdate() {
        if(this.messagesEnd)
            this.messagesEnd.scrollIntoView({behavior: "smooth", block: "end"});
    }
    render() {
        const currentFriend = this.props.friends[this.props.friends.findIndex(item => item.id === this.props.currentChat)]
        return (  
            <div className={ 'social-container ' + (this.props.open ? '' : 'closed') }>
                { this.props.friends.map((friend) =>
                    <div className="user" key={ friend.id }>
                        <div className="avatar" onClick={() => socialActions.chatWith(friend.id)}>
                            <Avatar 
                            img={ '/f/accounts/' + friend.avatar }
                            status={ 0 }
                            />
                        </div>
                    </div>
                )}
                { this.props.currentChat && 
                <section className="chat-container">
                    <div className="chat-content">
                        <div className="chat-head">
                            <div className="chat-head-user-infos">
                                <div className="avatar">
                                    <Avatar img = {'/f/accounts/' + currentFriend.avatar } status={ 0 } /> 
                                </div>
                                <div className='info'>
                                    <Link to='/' className='username'>{ currentFriend.display_name }</Link>
                                    <span className='status'>Listening to <Link to='/'>Mario Party 4</Link></span>
                                </div>      
                            </div>
                            <i class="hide-chat fas fa-angle-double-right" onClick={() => socialActions.chatWith(null)}></i>
                        </div>
                        <div className="messages">
                            { this.props.messages[this.props.currentChat].map((message, i) =>
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
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.social.messages,
    currentChat: state.social.currentChat,
    friends: state.social.friends,
    open: state.social.open
})
const mapDispatchToProps = (dispatch) => ({
    addMessage: (message) => dispatch({ type: 'SOCIAL_SEND_MESSAGE', message: message})
})
export default connect(mapStateToProps, mapDispatchToProps)(Social)