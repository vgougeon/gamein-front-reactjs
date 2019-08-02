import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Img from '../../img/img';
import "./gamecard.scss";
class GameCard extends Component {
  render() {
    return (
      <div className="game-item box s-1 mx-g2 mb-g">
        <Img 
          src={"http://njak.fr/assets/imgs/cover/" + this.props.id + ".jpg"} 
          alt={this.props.name + " - Cover"}
          ratio='120%'
        />
        <div className="d-flex flex-column mx-2 m-g">
          <Link to={'/game/' + this.props.id + '/' + this.props.name.replace(/\s+/g, '-')}>{this.props.name}</Link>
          <span className="date">{this.props.release_year}</span>
          <div className="d-flex flex-wrap">
          { this.props.console.map((console) =>
            <span key={console.id} className="console s-1 mr-1 mb-1" style={{background: console.background, color: console.color}}>
              { console.short }
            </span>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
