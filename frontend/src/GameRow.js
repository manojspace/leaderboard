import React, {useState, useEffect} from 'react';
import {TextField, Button, TableRow, TableCell, IconButton} from '@material-ui/core';
import {Edit} from '@material-ui/icons';

function GameRow({item, updateGame}) {
	const [game, setGame] = useState(item);
	const [isEdit, setEdit] = useState(false);

	useEffect(() => {
		setGame(item);
	}, [item]);

	const handleChange = (value, name) => {
		setGame({...game, [name]: value});
	}

	const saveItem = () => {
		updateGame(game);
		setEdit(false);
	}

	const enableEdit = () => {
		setEdit(true)
	}

	return (
		<TableRow hover>
			<TableCell title="click to edit" onClick={isEdit?null:enableEdit}>
			{
				isEdit ?
				<TextField value={game.Rank} size="small" onChange={(event) => {handleChange(event.target.value, 'Rank')}} />
				:
				game.Rank
			}
			</TableCell>
			<TableCell>
			{
				isEdit ?
				<TextField value={game.Name} size="small" onChange={(event) => {handleChange(event.target.value, 'Name')}} />
				:
				game.Name
			}
			</TableCell>
			<TableCell>
			{
				isEdit ?
				<TextField value={game.Platform} size="small" onChange={(event) => {handleChange(event.target.value, 'Platform')}} />
				:
				game.Platform
			}
			</TableCell>
			<TableCell title="click to edit" onClick={isEdit?null:enableEdit}>
			{
				isEdit ?
				<TextField value={game.Year} size="small" onChange={(event) => {handleChange(event.target.value, 'Year')}} />
				:
				game.Year
			}
			</TableCell>
			<TableCell>
			{
				isEdit ?
				<TextField value={game.Genre} size="small" onChange={(event) => {handleChange(event.target.value, 'Genre')}} />
				:
				game.Genre
			}
			</TableCell>
			<TableCell>
			{
				isEdit ?
				<TextField value={game.Publisher} size="small" onChange={(event) => {handleChange(event.target.value, 'Publisher')}} />
				:
				game.Publisher
			}
			</TableCell>
			<TableCell>
			{
				isEdit ?
				<TextField value={game.Global_Sales} size="small" onChange={(event) => {handleChange(event.target.value, 'Global_Sales')}} />
				:
				game.Global_Sales
			}
			</TableCell>
			<TableCell align="right">
			{
				isEdit ?
				<Button size="small" color="primary" onClick={saveItem} variant="contained">Save</Button>
				:
				<IconButton size="small" color="primary" onClick={enableEdit} variant="contained"><Edit fontSize="small" /></IconButton>
			}
			</TableCell>
		</TableRow>
		)
}

export default GameRow;