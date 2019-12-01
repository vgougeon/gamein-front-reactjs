import React, { Component, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './gameHeader.scss';
import '../gamecard/gamecard.scss'
import Img from '../../img/img';
const NewSkin = React.lazy(() => import('../../editor/newSkin/newSkin'))
class GameHeader extends Component {
    static defaultProps = {
        skins: []
    };
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <React.Fragment>
                <div className="game-wrapper-container">
                    <div className={ 'game-wrapper ' + (this.props.editor ? 'editor' : '')}>
                        { this.props.skins.length > 0 &&
                        <Img src={"http://54.37.228.12/f/skin/" + this.props.skins[0].id + ".jpg"} 
                        className="appear wrapper-banner"
                        alt="Game Banner" 
                        /> }
                        { this.props.editor &&
                        <Suspense fallback={<div>Loading...</div>}>
                            <NewSkin gameId={ this.props.id } />
                        </Suspense>
                        }
                        <div className="d-flex info-container">
                            { this.props.id && <Img src={"http://54.37.228.12/f/covers/" + this.props.id + ".jpg"} 
                            className="cover s-1"
                            alt="Game Cover"
                            /> }
                            <div className="d-flex flex-column info">
                                <span className="name">{this.props.name}</span>
                                <span className="username">{this.props.release_year}</span>
                                <div className="d-flex">
                                { this.props.console.map((console) =>
                                    <span key={console.id} className="console s-1 mr-1 mt-1" style={{ background: console.background, color: console.color }}>
                                        {console.short}
                                    </span>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-1 account">
                    <div className="menu justify-content-between">
                        <div className="d-flex h-100">
                            <NavLink exact={true} activeClassName='active' to={'/game/' + this.props.id}>LE JEU</NavLink>
                            <NavLink exact={true} activeClassName='active' to={'/game/' + this.props.id + '/images'}>IMAGES</NavLink>
                            <NavLink exact={true} activeClassName='active' to={'/game/' + this.props.id + '/ost'}>OST</NavLink>
                        </div>
                        <div className="d-flex h-100">
                            { this.props.auth &&
                            <div className={'menu-item ' + (this.props.editor ? 'active' : '')}
                            onClick={ this.props.toggleEdit }
                            >
                            <i className="fas fa-pen-square" />
                            EDITER
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
})
export default connect(mapStateToProps)(GameHeader)
