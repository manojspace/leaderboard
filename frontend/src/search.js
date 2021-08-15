import React from 'react';
import {TextField} from '@material-ui/core';

export default class SearchData extends React.Component {
	typingTimer = null;
	state = {
		searchText: ''
	}

	filterText = (event) => {
		let value = event.target.value
		this.setState({searchText: value});

		clearTimeout(this.typingTimer);
		this.typingTimer = setTimeout(() => {
			this.props.searchGames({input: value});
		}, 800);
	}

	render() {
		const {searchText} = this.state;
		return(
			<div className="search">
				<TextField 
				fullWidth
				label="Search"
				variant="outlined"
				size="small"
				placeholder="Search by year, rank, publisher, name" type="text" value={searchText} onChange={this.filterText}
				/>
			</div>
			)
	}
} 