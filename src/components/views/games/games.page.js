import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameCard from "../../shared/games/gamecard/gamecard";
import './games.page.scss';

let state = {
	games: []
}
class GamesPage extends Component {
	constructor(props) {
		super(props);
		this.state = state;
		this.appendGames = this.appendGames.bind(this);

		if(!this.state.games.length) {
			this.state.games = this.getJsonGames();
		}
	}
	componentWillUnmount() {
    state = this.state;
	}
	getJsonGames(){
		//A faire en HTTP
		return [
			{
				id: 4,
				name: `Mario Kart: Double Dash!!`,
				release: 2003
			},
			{
				id: 3,
				name: `Tales of Symphonia`,
				release: 2003 
			},
			{
				id: 5,
				name: `World of Warcraft`,
				release: 2004
			},
			{
				id: 9,
				name: `Luigi's Mansion`,
				release: 2002 
			}	
		];
	}
	appendGames(){
		this.setState(state => ({
      games : [...state.games, ...this.getJsonGames()]
    }));
	}
	render() { 
		return ( 
			<section id="page-content">
        <div class="row mt-g g-g px-g">
          <div class="col-xl-9 col-lg-12">
						<div class="games">
							{ this.state.games.map((game) =>
								<GameCard { ...game} />
							)}
						</div>
          </div>
          <div class="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
						<button onClick={this.appendGames}>Test : Afficher Plus</button>
					</div>
        </div>
      </section>
		);
	}
}
 
export default GamesPage;
