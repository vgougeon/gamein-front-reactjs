import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Img from '../../img/img';
import "./gamecard.scss";
class GameCard extends Component {
  render() {
    return (
      <div className="game-item s-1 mx-g2 mb-g">
        { (this.props.skin && this.props.skin.length !== 0) ?
        <Img className="bg-game" src={`http://54.37.228.12/f/skin/${this.props.skin[0]}.jpg`} />
        : null
        }
        <div className="game-item-content">
          <Img 
            src={"http://njak.fr/assets/imgs/cover/" + this.props.id + ".jpg"} 
            alt={this.props.name + " - Cover"}
            ratio='120%'
          />
          <div className=" d-flex flex-column mx-2 m-g">
            <div className="flex-wrap justify-content-center align-items-center gi-infos">
            <Link to={'/game/' + this.props.id + '/'}>{this.props.name}</Link>
            <span className="date ml-2">{this.props.release_year}</span>
            </div>
            <div className="d-flex flex-wrap mt-2">
            { this.props.console.map((console) =>
              <span key={console.id} className="console mr-1 mb-1" style={{background: console.background, color: console.color}}>
                { console.short }
              </span>
            )}
            </div>
            {/* <div className="rank-icon d-flex justify-content-center mt-1">
              <img className="bg-rank-icon" src="../../../assets/gold.png" alt="rank"/>
              <span className="rank-number pt-2">2<sup>e</sup></span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
