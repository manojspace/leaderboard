import React, {Fragment} from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, LinearProgress} from '@material-ui/core';
import {ArrowDropDown, ArrowDropUp} from '@material-ui/icons';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import Search from './search';
import GameRow from './GameRow';
import './style.css';

const columns = ["Rank", "Name", "Platform", "Year", "Genre", "Publisher", "Global_Sales"];

class Games extends React.Component {
	state = {
		games: [],
		loading: true,
		page: 1,
		total: 0,
		sort: 'Rank',
		sortBy: 'ASC'
	}
	componentDidMount() {
		this.getGames({input: '', page: 1});
	}

	getGames = (data) => {
		//const {input, page} = data;
		const {sort, sortBy, input, page} = this.state;
		let api = "/api/games?page="+page+"&sort="+sort+"&sortBy="+sortBy+"&q="+(input?input:"");
		axios.get(api).then(res => {
			const {data} = res;
			if (data && data.success) {
				this.setState({games: data.data.rows, total: data.data.count, loading: false});
			}
		})
	}

	handlePageChange = (event, newPage) => {
		this.setState({page: newPage, loading: true}, () => {
			this.getGames({page: newPage, input: this.state.input?this.state.input:""});
		});
	}

	updateGame = (data) => {
		axios.post("/api/game/update", data).then(res => {
			const {data} = res;
			if (data && data.success) {
				const {page, input} = this.state;
				this.getGames({page: page, input: input});
			}
		})
	}

	handleSort = (type) => {
		const {sortBy, input, page} = this.state;
		this.setState({sort: type, sortBy: sortBy==='ASC'?'DESC':'ASC', loading: true});
		this.getGames();
	}

	render() {
		const {loading, games, total, sort, sortBy} = this.state;
		var pages = parseInt(total/9);
		var remaining = total%9;
		if (remaining > 0) {
			pages = pages+1;
		}
		return(
			<div>
				<Search searchGames={this.getGames} />
				{
					loading &&
					<LinearProgress color="secondary" />
				}
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
						{
							columns && columns.length && 
							columns.map((column, index) => {
								return <TableCell key={index} onClick={() => {this.handleSort(column)}}>
								{column}
								{
									sort === column && 
									<Fragment>
									{
										sortBy === 'DESC' ?
										<ArrowDropDown />
										:
										<ArrowDropUp />
									}
									</Fragment>
								}
								</TableCell>
							})
						}
						<TableCell align="right">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{
						games && games.length && 
						games.map((game, index) => {
							return <GameRow item={game} key={index} updateGame={this.updateGame} />
						})
					}
					</TableBody>
				</Table>
				<Pagination  onChange={this.handlePageChange} className="pagination" count={pages} variant="outlined" shape="rounded" />
			</div>
			)
	}
}

export default Games;