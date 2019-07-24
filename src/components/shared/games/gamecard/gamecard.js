import React, { Component } from "react";
import "./gamecard.scss";
class GameCard extends Component {
  render() {
    return (
      <div class="game-item box s-1 mx-g2 mb-g">
        <img
          src={"http://njak.fr/assets/imgs/cover/" + this.props.id + ".jpg"}
          alt={this.props.name + " - Cover"}
        />
        <div class="d-flex flex-column mx-2 m-g">
          <a href="">{this.props.name}</a>
          <span class="date">{this.props.release}</span>
          <div class="d-flex">
            <span class="console s-1 mr-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default GameCard;
