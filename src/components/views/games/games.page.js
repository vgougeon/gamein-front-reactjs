import React, { Component } from "react";
import axios from 'axios';
import GameCard from "../../shared/games/gamecard/gamecard";
import UserCard from "../../shared/user/userCard/userCard";

import './games.page.scss';

let state = { games: [], offset: 0, scroll: 0 }

class GamesPage extends Component {
	constructor(props) {
		super(props);
		this.state = state;
		this.appendGames = this.appendGames.bind(this);
	}
	componentDidMount() {
		if (!this.state.games.length)
			this.appendGames();
		document.getElementById("page-content").scrollTop = this.state.scroll
	}
	componentWillUnmount() {
		state = {...this.state, scroll: document.getElementById("page-content").scrollTop};
	}
	getGames() {
		return axios.get('http://api.njak.fr/getGames', { params: { offset: this.state.offset } });
	}
	appendGames() {
		let self = this
		this.getGames().then(response => {
			if(response.data.length){
				self.setState(state => ({
					games: [...self.state.games, ...response.data],
					offset: [...self.state.games, ...response.data].length
				}));
			}
		})
	}
	render() {
		return (
			<section id="page-content">
				<div className="row mt-g g-g px-g">
					<div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
						<UserCard />
					</div>
					<div className="col-xl-9 col-lg-9">
						<div className={"games " + this.state.view}>
							{this.state.games.map((game) =>
								<GameCard key={game.id} {...game} />
							)}
						</div>
						<button onClick={this.appendGames} className="mx-auto fromTop slowAppear">Afficher plus</button>
					</div>
					<div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
					</div>
				</div>
			</section>
		);
	}
}

export default GamesPage;
