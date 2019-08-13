import React, { Component } from "react";
import axios from 'axios';
import GameCard from "../../shared/games/gamecard/gamecard";
import Spinner from '../../shared/spinner/spinner-standard';
import ShowMore from '../../shared/elements/showMore';
import FilterPanel from './filterPanel/filterPanel';
import SelectRank from './selectRank/selectRank';
import './games.page.scss';
import SwitchLayout from "./switchLayout/switchLayout";

let state = { games: [], offset: 0, scroll: 0, isLoading: true, filters: {}}

class GamesPage extends Component {
	constructor(props) {
		super(props);
		this.state = state;
	}
	componentDidMount() {
		if (!this.state.games.length)
			this.getGames();
		document.getElementById("page-content").scrollTop = this.state.scroll
	}
	componentWillUnmount() {
		state = {...this.state, scroll: document.getElementById("page-content").scrollTop};
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.filters !== this.state.filters){
			this.getGames()
		}
	}
	getGames = () => {
		let self = this
		this.setState({ isLoading: true })
		axios.post('http://54.37.228.12/api/getGames',{ offset: this.state.offset, filters: this.state.filters })
		.then(response => {
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
	resetGames = (filters) => {
		this.setState({
			games: [],
			offset: 0,
			scroll: 0,
			isLoading: true
		}, this.getGames(filters))
	}
	setFilters = (filters) => {
		console.log('Set FILTERS')
		this.setState({
			games: [],
			offset: 0,
			scroll: 0,
			isLoading: true,
			filters: filters
		})
	}

	render() {
		return (
			<section id="page-content">
				<div className="row mt-g g-g row-p-0">
					<div className="col-xl-3">
						<FilterPanel setFilters={ this.setFilters } /> 
					</div>
					<div className="col-xl-9 col-lg-9">
						<div className="panel-games mb-g d-flex justify-content-between">
							<SelectRank />
							<SwitchLayout />
						</div>
						<div className={"games " + this.state.view}>
							{this.state.games.map((game) =>
								<GameCard key={game.id} {...game} />
							)}
						</div>
						<div className="loading-block">
							{ this.state.isLoading ? 
							<div className="d-flex justify-content-center w-100"><Spinner size={30} /></div>
							: <ShowMore action={ this.getGames }/>
							}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default GamesPage;
