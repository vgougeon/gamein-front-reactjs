import React, { Component } from "react";
import axios from 'axios';
import GameCard from "../../shared/games/gamecard/gamecard";
import UserCardMin from "../../shared/user/userCardMin/userCardMin";
import Spinner from '../../shared/spinner/spinner-standard';
import ShowMore from '../../shared/elements/showMore';

import './games.page.scss';

let state = { games: [], offset: 0, scroll: 0, isLoading: true }

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
		this.setState({ isLoading : true })
		let self = this
		this.getGames().then(response => {
			if(response.data.length){
				self.setState(state => ({
					games: [...self.state.games, ...response.data],
					offset: [...self.state.games, ...response.data].length,
					isLoading: false
				}));
			}
			else {
				self.setState(state => ({
					isLoading: false
				}));
			}
		})
	}
	render() {
		return (
			<section id="page-content">
				<div className="row mt-g g-g row-p-0">
					<div className="col col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
						<UserCardMin />
					</div>
					<div className="col col-xl-9 col-lg-9">
						<div className={"games " + this.state.view}>
							{this.state.games.map((game) =>
								<GameCard key={game.id} {...game} />
							)}
						</div>
						<div className="loading-block">
							{ this.state.isLoading ? 
							<div className="d-flex justify-content-center w-100"><Spinner size={30} /></div>
							: <ShowMore action={ this.appendGames }/>
							}
						</div>
					</div>
					<div className="col-xl-3 d-none d-md-none d-sm-none d-lg-none d-xl-block">
					</div>
				</div>
			</section>
		);
	}
}

export default GamesPage;
