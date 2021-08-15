/**
* @author Manoj Kumar<manojswami600@gmail.com>
* Date: 18-08-2021
*/

'use strict';
const express = require('express');
const router = express.Router();
const indexServices = require('../services/indexServices');

router.get('/games', (req, res, next) => {
	const params = req.query;
	indexServices.getGames(params).then(data => {
		res.json({
			success: true,
			data: data
		});
	}).catch(err => {
		res.json({
			success: false,
			message: err?err:'Error Occured!'
		});
	});
});

router.post('/game/update', (req, res, next) => {
	const params = req.body;
	indexServices.updateGame(params).then(data => {
		res.json({
			success: true,
			data: data
		});
	}).catch(err => {
		res.json({
			success: false,
			message: err?err:'Error Occured!'
		});
	});
});

router.get('/sync_data', (req, res, next) => {
	const params = {};
	indexServices.syncData(params).then(data => {
		res.json({
			success: true,
			data: data
		});
	}).catch(err => {
		res.json({
			success: false,
			message: err?err:'Error Occured!'
		});
	});
});

module.exports = router;