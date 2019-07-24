import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameCard from "../../shared/games/gamecard/gamecard";
import './games.page.scss';

class GamesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [
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
			]
		}
		this.appendGames = this.appendGames.bind(this);
	}
	appendGames(){
		//tests
		console.log("Hey")
		let newGames = [
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
		]
		this.setState(state => ({
      games : [...state.games, ...newGames]
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
