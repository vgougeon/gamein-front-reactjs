import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './gameHeader.scss';
import '../gamecard/gamecard.scss'
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
                <div className="game-wrapper">
                    { this.props.skins.length && 
                    <img src={"http://njak.fr/assets/imgs/skins/" + this.props.skins[0].id + ".png"} 
                    className="appear wrapper-banner"
                    alt="Game Banner" 
                    /> }
                    { this.props.id && <img src={"http://njak.fr/assets/imgs/cover/" + this.props.id + ".jpg"} 
                    className="cover s-1"
                    alt="Game Cover"
                    /> }
                    <div className="d-flex flex-column info">
                        <span className="name">{this.props.name}</span>
                        <span className="username">{this.props.release_year}</span>
                        { this.props.console.map((console) =>
                            <span key={console.id} className="console s-1 mr-1 mt-1" style={{ background: console.background, color: console.color }}>
                                {console.short}
                            </span>
                        )}
                    </div>
                </div>
                <div className="box s-1 account">
                    <div className="menu justify-content-between">
                        <div className="d-flex h-100">
                            <NavLink exact={true} activeClassName='active' to={'/game/' + this.props.id}>LE JEU</NavLink>
                            <NavLink exact={true} activeClassName='active' to={'/game/' + this.props.id + '/images'}>IMAGES</NavLink>
                            <NavLink exact={true} activeClassName='active' to={'/game/' + this.props.id + '/ost'}>OST</NavLink>
                        </div>
                        <div className="d-flex h-100">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GameHeader;