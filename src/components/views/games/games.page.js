import React, { Component } from "react";
import axios from 'axios';
import GameCard from "../../shared/games/gamecard/gamecard";
import './games.page.scss';

let state = { games: [], offset : 0 }

class GamesPage extends Component {
	constructor(props) {
		super(props);
		this.state = state;
		this.appendGames = this.appendGames.bind(this);
	}
	componentDidMount() {
		if(!this.state.games.length)
			this.appendGames();
	}
	componentWillUnmount() {
    state = this.state;
	}
	getGames() {
		return axios.get('http://api.njak.fr/getGames', { params: { offset: this.state.offset }});
	}
	appendGames(){
		let self = this
		this.getGames().then( response => {
			self.setState(state => ({
				games : [...self.state.games, ...response.data],
				offset : [...self.state.games, ...response.data].length 
			}));
			
		})
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
