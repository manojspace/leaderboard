/**
* @author Manoj Kumar<manojswami600@gmail.com>
* Date: 18-08-2021
*/

const models = require('../models');
const Sequelize = require('sequelize');
const request = require('request');
const Op = Sequelize.Op;
var error = 'Error Occured!';
var serverError = error;

module.exports = {
	getGames: params => {
		return new Promise((resolve, reject) => {
			console.log(params);
			let condition = {};
			let limit = 0;
			if (params.page && params.page > 1) {
				limit = params.page * 9;
				if (limit) {
					limit = limit > 9 ? limit - 9 : 0;
				} else {
					limit = 0;
				}
			}
			let order = [['rank', 'ASC']]
			if (params.sort && params.sortBy) {
				order = [[params.sort, params.sortBy]]
			}
			if (params.q) {
				condition = {
					[Op.or]: [
					{Rank: {[Op.like]: '%'+params.q+'%'}},
					{Name: {[Op.like]: '%'+params.q+'%'}},
					{Platform: {[Op.like]: '%'+params.q+'%'}},
					{Genre: {[Op.like]: '%'+params.q+'%'}},
					{Publisher: {[Op.like]: '%'+params.q+'%'}},
					{Global_Sales: {[Op.like]: '%'+params.q+'%'}}
					]
				};
			}
			models.game.findAndCountAll({
				where: condition,
				order: order,
				limit: [limit, 9],
			}).then(games => {
				resolve(games);
			}).catch(err => {
				console.log("Error while getting games", err);
				reject(serverError);
			})
		})
	},

	updateGame: params => {
		return new Promise((resolve, reject) => {
			models.game.findOne({
				where: {
					id: params.id
				},
				attributes: ['id']
			}).then(game => {
				if (game) {
					game.update(params).then(updated => {
						resolve('updated');
					}).catch(err => {
						console.log("Error while updating game", err);
						reject(serverError);
					})
				} else {
					reject("No such game found to update");
				}
			}).catch(err => {
				console.log("Error while getting game for update", err);
				reject(serverError);
			})
		})
	},

	syncData: params => {
		return new Promise((resolve, reject) => {
			request('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopSellingGamesbb1c49e.json', async function (error, response, body) {
				const result = await JSON.parse(body);
				if (result && result.length) {
					let count = 0;
					let itemsAdded = 0;
					result.map(item => {
						models.game.create(item).then(added => {
							count++;
							itemsAdded++;
							if (count == result.length) {
								resolve(itemsAdded+" items added");
							}
						}).catch(err => {
							console.log("Error while adding new row", err);
							count++;
							if (count == result.length) {
								resolve(itemsAdded+" items added");
							}
						})
					})
				} else {
					resolve("0 items added");
				}
			});
		})
	}
}